import useLogout from '../features/authentication/useLogout';
import Button from './Button';
import SpinnerMini from './SpinnerMini';

function Logout() {
    const { isPending, logout } = useLogout();

    return (
        <Button onClick={logout} isDisabled={isPending}>
            {isPending && <SpinnerMini />}
            {isPending ? 'Logging out...' : 'Log out'}
        </Button>
    );
}

export default Logout;
