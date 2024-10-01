import styled from 'styled-components';
import useLogout from '../features/authentication/useLogout';
import SpinnerMini from './SpinnerMini';

const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: bold;
`;

function Logout() {
    const { isPending, logout } = useLogout();

    const handleLogout = () => {
        logout();
    };

    return (
        <StyledButton onClick={handleLogout} disabled={isPending}>
            {isPending && <SpinnerMini />}
            {isPending ? 'Logging out...' : 'Log out'}
        </StyledButton>
    );
}

export default Logout;
