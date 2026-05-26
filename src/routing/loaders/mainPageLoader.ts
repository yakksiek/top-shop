import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import * as t from '../../types';
import { fetchMainPageData } from '../../api/products';

const mainPageLoader = async ({ params }: LoaderFunctionArgs<{ gender: string }>) => {
    const { gender } = params;

    const isGenderValid = t.validGenders.includes(gender as t.Gender);
    if (!gender || !isGenderValid) {
        return redirect('/women');
    }

    return fetchMainPageData({ gender: gender as t.Gender });
};

export default mainPageLoader;
