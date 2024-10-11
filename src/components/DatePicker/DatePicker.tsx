import { useEffect, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import styled from 'styled-components';

import { dayData, monthData, yearData } from '../../db/datePickerData';
import { FormValues } from '../../features/dashboard/components/MyProfile/PersonalInformation';
import Select from '../Select';

const StyledSelectRow = styled.div`
    gap: 0.5rem;
    display: flex;
`;

function DatePicker(props: UseControllerProps<FormValues>) {
    const { field } = useController(props);
    const { onChange } = field;

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        // if the select wasn't filled pass
        if (!day && !month && !year) return;

        if (day && month && year) {
            const monthIndex = monthData.options.indexOf(month);
            const newDate = new Date(Number(year), monthIndex, Number(day));
            onChange(newDate);
        } else {
            onChange(null);
        }
    }, [day, month, onChange, year]);

    return (
        <StyledSelectRow>
            <Select
                fieldConfig={dayData}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDay(e.target.value)}
            />
            <Select
                fieldConfig={monthData}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)}
            />
            <Select
                fieldConfig={yearData}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)}
            />
        </StyledSelectRow>
    );
}

export default DatePicker;
