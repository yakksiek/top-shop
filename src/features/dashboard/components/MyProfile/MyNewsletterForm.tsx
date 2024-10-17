import { useForm } from 'react-hook-form';

import * as h from '../../../../utils/helpers';
import { StyledForm } from '../../../../components/Form';
import Checkbox from '../../../../components/Checkbox';
import { useUser } from '../../../authentication/useUser';
import Button from '../../../../components/Button';

export interface NewsletterFormValues {
    newsletter: boolean;
}

function MyNewsletterForm() {
    const { user } = useUser();
    // user must be logged in to render this component
    const { user_metadata } = user!;
    const { userNewsletter } = h.getUserMetadata(user_metadata);
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            newsletter: userNewsletter || false,
        },
    });

    const isNewsletterChecked = watch('newsletter');

    const onSubmit = (data: NewsletterFormValues) => {
        console.log('poszło');
        console.log(data);
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {/* <Checkbox */}
            <Checkbox<NewsletterFormValues>
                register={register}
                name='newsletter'
                label='Check the box if you would like to receive emails from us'
                value='newsletter'
            />
            <Button fill={false} type='submit' width='medium' isDisabled={!isNewsletterChecked}>
                Subscribe
            </Button>
        </StyledForm>
    );
}

export default MyNewsletterForm;
