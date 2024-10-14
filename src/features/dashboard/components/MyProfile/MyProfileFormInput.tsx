import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/Form';
import { InputFieldConfig } from './PersonalInformation';

interface MyProfileFormInputProps {
    name: string;
    fieldConfig: InputFieldConfig;
}

function MyProfileFormInput({ name, fieldConfig }: MyProfileFormInputProps) {
    const { register } = useFormContext();
    return <Input {...register(name, fieldConfig.validation)} />;
}

export default MyProfileFormInput;
