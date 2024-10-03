import styled from 'styled-components';
import { useUser } from '../../authentication/useUser';

const StyledIdentityContainer = styled.div`
    --header-vertical-margin: 4rem;
    text-align: center;
    position: relative;

    h4 {
        font-weight: 300;
        margin: var(--header-vertical-margin) auto;
        margin-bottom: 2rem;
    }
`;

const StyledInitials = styled.div`
    height: 80px;
    width: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--color-grey-0);
    font-size: 1.25rem;
    left: 50%;
    top: 0;
    // turning calc into a negative value
    transform: translate(-50%, calc(-1 * var(--header-vertical-margin) - 75%));
    position: absolute;
`;

function Identity() {
    const { user } = useUser();

    if (!user) return '';

    const { name, surname } = user.user_metadata;
    const initials = `${name.charAt(0).toUpperCase()}. ${surname.charAt(0).toUpperCase()}.`;

    return (
        <StyledIdentityContainer>
            <StyledInitials>{initials}</StyledInitials>
            <h4>
                {name} {surname}
            </h4>
        </StyledIdentityContainer>
    );
}

export default Identity;
