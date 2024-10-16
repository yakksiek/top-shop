import { PhoneNumber } from '../db/PersonalInformationFormData';

interface User {
    name: string;
    surname: string;
    email: string;
    password: string;
    address?: string;
    comapny?: '';
    dateOfBirth?: string;
    phoneNumber?: PhoneNumber;
    postCode?: string;
    title?: string;
    contactPreferences?: [];
}

export default User;
