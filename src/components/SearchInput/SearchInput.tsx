import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { device } from '../../styles/breakpoints';

const StyledInputWrapper = styled.div`
    width: 95vw;
    margin: 0 auto;
    display: none;

    @media ${device.mobile} {
        display: block;
    }
`;

const StyledInputContainer = styled.div`
    position: relative;
`;

const StyledInput = styled.input`
    width: 100%;
    border-radius: 100vmax;
    padding: 0 1rem 0 2.75rem;
    border: 1px solid var(--color-grey-200);
    height: 2.75rem;
    transition: border 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    font-size: 0.9rem;
    font-style: italic;
`;

const StyledIconWrapper = styled.span`
    position: absolute;
    font-size: 18px;
    height: 100%;
    top: 50%;
    left: 1rem;
    transform: translate(0, -25%);
`;

function SearchInput() {
    return (
        <StyledInputWrapper>
            <form>
                <StyledInputContainer>
                    <StyledIconWrapper>
                        <IoSearchOutline />
                    </StyledIconWrapper>
                    <StyledInput
                        placeholder="Search for 'Tote Bags'"
                        type='search'
                        autoComplete='off'
                        autoCorrect='off'
                        autoCapitalize='off'
                        spellCheck='false'
                    />
                </StyledInputContainer>
            </form>
        </StyledInputWrapper>
    );
}

export default SearchInput;
