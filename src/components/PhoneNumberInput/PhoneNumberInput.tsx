import { useEffect, useMemo } from 'react';
import { UseFormClearErrors, UseFormRegister, UseFormSetError, UseFormWatch } from 'react-hook-form';
import styled from 'styled-components';

import { PHONE_NUMBER_MIN_LENGTH } from '../../constants/validation';
import countryCallingCodes from '../../db/countryCallingCodes.json';
import { FormValues, PhoneNumber } from '../../features/dashboard/components/MyProfile/PersonalInformation';
import * as h from '../../utils/helpers';
import { Input } from '../Form';
import Select from '../Select';

const phoneTypes: Array<PhoneNumber['type']> = ['Mobile', 'Home', 'Work'];

const StyledWrapper = styled.div`
    display: flex;
    gap: var(--group-input-gap);
`;

interface PhoneNumberInputProps {
    register: UseFormRegister<FormValues>;
    baseName: 'phoneNumber';
    watch: UseFormWatch<FormValues>;
    setError: UseFormSetError<FormValues>;
    clearErrors: UseFormClearErrors<FormValues>;
}

function PhoneNumberInput({ register, baseName, watch, setError, clearErrors }: PhoneNumberInputProps) {
    const sortedCountryCodes = useMemo(() => h.getSortedCountryCodes(countryCallingCodes), []);

    const number = watch(`${baseName}.number`);

    useEffect(() => {
        if (!number) {
            return setError(baseName, { type: 'manual', message: 'Number is required' });
        }

        const isValidNumber = number.toString().length > PHONE_NUMBER_MIN_LENGTH;
        if (!isValidNumber) {
            return setError(baseName, { type: 'manual', message: 'Not a valid number (min 7 digits)' });
        } else {
            return clearErrors(baseName);
        }
    }, [number, setError, baseName, clearErrors]);

    return (
        <StyledWrapper>
            <Select {...register(`${baseName}.type`)} fieldConfig={{ options: phoneTypes }} />

            <Select {...register(`${baseName}.countryCode`)} fieldConfig={{ options: sortedCountryCodes }} />

            <Input type='text' {...register(`${baseName}.number`)} placeholder='Phone number' />
        </StyledWrapper>
    );
}

export default PhoneNumberInput;
