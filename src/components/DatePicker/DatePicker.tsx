import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import * as h from '../../utils/helpers';
import { dayData, monthData, yearData } from '../../db/datePickerData';
import Select from '../Select';
import { DateFieldConfig, FormValues } from '../../db/PersonalInformationFormData';

const StyledSelectRow = styled.div`
    gap: 0.5rem;
    display: flex;
`;

interface DatePickerProps {
    name: keyof FormValues;
    fieldConfig?: DateFieldConfig;
}

function DatePicker({ name }: DatePickerProps) {
    const { setValue, setError, clearErrors, watch } = useFormContext<FormValues>();

    const defaultDateString = watch(name) as string;
    const { day: defaultDay, month: defaultMonth, year: defaultYear } = h.parseISODateToParts(defaultDateString);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        if (!day && !month && !year) return;

        if (day && month && year) {
            const monthIndex = monthData.options.indexOf(month);
            const newDate = new Date(Number(year), monthIndex, Number(day)).toISOString();
            setValue(name, newDate);
            clearErrors(name);
        } else {
            setError(name, { type: 'manual', message: 'Invalid date format' });
        }
    }, [clearErrors, day, month, name, setError, setValue, year]);

    return (
        <StyledSelectRow>
            <Select
                fieldConfig={dayData}
                name='day'
                defaultValue={defaultDay || ''}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDay(e.target.value)}
            />
            <Select
                name='month'
                fieldConfig={monthData}
                defaultValue={defaultMonth || ''}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)}
            />
            <Select
                name='year'
                fieldConfig={yearData}
                defaultValue={defaultYear || ''}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)}
            />
        </StyledSelectRow>
    );
}

export default DatePicker;
