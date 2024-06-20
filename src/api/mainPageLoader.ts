import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import * as t from '../types';
import { BASE_URL } from '../contants/api';

const mainPageLoader = async ({ params }: LoaderFunctionArgs<{ gender: string }>) => {
    const { gender } = params;

    if (!gender || !t.validGenders.includes(gender as t.GenderTypes)) {
        return redirect('/women');
    }

    return fetch(`${BASE_URL}/${gender}`);
};

export default mainPageLoader;
