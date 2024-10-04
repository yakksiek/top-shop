import styled from 'styled-components';
import { BASE_URL } from '../../../../constants/api';

const StyledPhotosList = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const StyledImgItemList = styled.li`
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    flex: 0 0 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        object-fit: contain;
    }
`;

interface ProductDetailsMedia {
    photos: string[];
}

function ProductDetailsMedia({ photos }: ProductDetailsMedia) {
    return (
        <StyledPhotosList>
            {photos.map(photoUrl => (
                <StyledImgItemList key={photoUrl}>
                    <img src={`${BASE_URL}${photoUrl}`} />
                </StyledImgItemList>
            ))}
        </StyledPhotosList>
    );
}

export default ProductDetailsMedia;
