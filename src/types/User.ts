import { PhoneNumber } from '../db/PersonalInformationFormData';

interface User {
    name: string;
    surname: string;
    email: string;
    password: string;
    address?: string;
    comapny?: '';
    dateOfBirth?: Date;
    phoneNumber: PhoneNumber;
    postCode?: string;
    title?: string;
}

export default User;
