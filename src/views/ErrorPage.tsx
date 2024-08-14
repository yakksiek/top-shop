import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledErrorSection = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledFlexWrapper = styled.div`
    text-align: center;
`;

function ErrorPage() {
    const error = useRouteError();
    const isRouteError = isRouteErrorResponse(error);
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/', { replace: true });
    };

    return (
        <StyledErrorSection>
            <StyledFlexWrapper>
                <h1>Oops...</h1>
                {isRouteError && <p>Invalid page</p>}
                {!isRouteError && (
                    <>
                        <p>Unexpected error:</p>
                        <p>{(error as Error).message || 'An unknown error occurred.'}</p>
                    </>
                )}
            </StyledFlexWrapper>
            <Button fill={true} onClick={handleGoHome}>
                Go back home
            </Button>
        </StyledErrorSection>
    );
}

export default ErrorPage;
