import styled from 'styled-components';
import { BASE_URL } from '../../contants/api';

interface ProductDetailsMedia {
    photos: string[];
}

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
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
    }
`;

function ProductDetailsMedia({ photos }: ProductDetailsMedia) {
    console.log(photos);

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
