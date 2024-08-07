import styled, { css } from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { device } from '../../styles/breakpoints';
import { LiaTimesSolid } from 'react-icons/lia';
import { useSearchInputContext } from '../../contexts/SearchInputContext';

interface StyledInputWrapperProps {
    type?: 'header';
}

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
    width: 95vw;
    margin: 0 auto;
    display: block;
    padding: ${props => (props.type !== 'header' ? '0 0 1rem 0' : '1rem 0')};
    max-width: 40rem;

    @media ${device.tablet} {
        ${props =>
            props.type !== 'header' &&
            css`
                display: none;
            `}
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
    transition: border-color var(--animation-and-timing);

    &:focus {
        border-color: var(--color-black);
    }
`;

const StyledIconWrapper = styled.span`
    position: absolute;
    font-size: 18px;
    height: 100%;
    top: 50%;
    left: 1rem;
    transform: translate(0, -25%);
`;

const StyledButton = styled.button`
    position: absolute;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    top: 50%;
    transform: translate(0, -50%);
    right: -4rem;
`;

interface SeachInputProps {
    type?: 'header';
    value: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ type, onChangeHandler, value }: SeachInputProps) {
    const { handleSearchInputOpen } = useSearchInputContext();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <StyledInputWrapper type={type}>
            <form onSubmit={submitHandler}>
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
                        onChange={onChangeHandler}
                        value={value}
                    />
                    {type === 'header' && (
                        <StyledButton type='button' onClick={handleSearchInputOpen}>
                            <LiaTimesSolid />
                        </StyledButton>
                    )}
                </StyledInputContainer>
            </form>
        </StyledInputWrapper>
    );
}

export default SearchInput;
