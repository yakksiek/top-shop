import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { PHONE_NUMBER_MIN_LENGTH } from '../../constants/validation';
import countryCallingCodes from '../../db/countryCallingCodes.json';
import { PhoneNumber } from '../../features/dashboard/components/MyProfile/PersonalInformation';
import * as h from '../../utils/helpers';
import { Input } from '../Form';
import Select from '../Select';

const phoneTypes: Array<PhoneNumber['type']> = ['Mobile', 'Home', 'Work'];

const StyledWrapper = styled.div`
    display: flex;
    gap: var(--group-input-gap);
`;

interface PhoneNumberInputProps {
    name: 'phoneNumber';
}

function PhoneNumberInput({ name }: PhoneNumberInputProps) {
    const { register, watch, setError, clearErrors } = useFormContext();
    const sortedCountryCodes = useMemo(() => h.getSortedCountryCodes(countryCallingCodes), []);

    const number = watch(`${name}.number`);

    useEffect(() => {
        if (!number) {
            return setError(name, { type: 'manual', message: 'Number is required' });
        }

        const isValidNumber = number.toString().length >= PHONE_NUMBER_MIN_LENGTH;
        if (!isValidNumber) {
            return setError(name, { type: 'manual', message: 'Not a valid number (min 7 digits)' });
        } else {
            return clearErrors(name);
        }
    }, [number, setError, name, clearErrors]);

    return (
        <StyledWrapper>
            <Select name={`${name}.type`} fieldConfig={{ options: phoneTypes, validation: {} }} />
            <Select name={`${name}.countryCode`} fieldConfig={{ options: sortedCountryCodes, validation: {} }} />
            <Input type='text' {...register(`${name}.number`)} placeholder='Phone number' />
        </StyledWrapper>
    );
}

export default PhoneNumberInput;
