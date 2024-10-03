import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

const StyledPictureContainer = styled.div`
    height: 30vh;

    @media ${device.tablet} {
        width: 100vw;
        aspect-ratio: 16 / 9;
    }
`;

const StyledPicture = styled.picture`
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`;

function DashboardWelcomeImage() {
    return (
        <StyledPictureContainer>
            <StyledPicture>
                <source
                    type='image/webp'
                    srcSet='
                    /assets/images/dashboardWelcome/welcome-page-490w.webp 490w,
                    /assets/images/dashboardWelcome/welcome-page-600w.webp 600w,
                    /assets/images/dashboardWelcome/welcome-page-730w.webp 730w,
                    /assets/images/dashboardWelcome/welcome-page-1090w.webp 1090w,
                    /assets/images/dashboardWelcome/welcome-page-1180w.webp 1180w,
                    /assets/images/dashboardWelcome/welcome-page-1440w.webp 1440w,
                    /assets/images/dashboardWelcome/welcome-page-2400w.webp 2400w,
                    /assets/images/dashboardWelcome/welcome-page-4096w.webp 4096w
                '
                    sizes='(max-width: 600px) 490px, 
                       (max-width: 730px) 600px, 
                       (max-width: 1090px) 730px, 
                       (max-width: 1180px) 1090px, 
                       (max-width: 1300px) 1180px, 
                       (max-width: 2400px) 1440px, 
                       4096px'
                />

                <img src='/assets/images/dashboardWelcome/welcome-page-1090w.jpg' alt='Welcome to Your Dashboard' />
            </StyledPicture>
        </StyledPictureContainer>
    );
}

export default DashboardWelcomeImage;
