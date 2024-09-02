import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import * as t from '../types';
import { BASE_URL } from '../constants/api';

const mainPageLoader = async ({ params }: LoaderFunctionArgs<{ gender: string }>) => {
    const { gender } = params;

    const isGenderValid = t.validGenders.includes(gender as t.GenderTypes);
    if (!gender || !isGenderValid) {
        return redirect('/women');
    }

    return fetch(`${BASE_URL}/${gender}`);
};

export default mainPageLoader;
