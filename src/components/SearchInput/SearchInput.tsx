import { IoSearchOutline } from 'react-icons/io5';
import { LiaTimesSolid } from 'react-icons/lia';

import {
    StyledButton,
    StyledIconWrapper,
    StyledInput,
    StyledInputContainer,
    StyledInputWrapper,
} from './SearchInput.styled';

interface SeachInputProps {
    type?: 'header';
    value: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    closeInputHandler: () => void;
    onSubmit: () => void;
}

function SearchInput({ type, onChangeHandler, value, closeInputHandler, onSubmit }: SeachInputProps) {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
        closeInputHandler();
    };

    const handleBlur = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <StyledInputWrapper type={type}>
            <form onSubmit={submitHandler}>
                <StyledInputContainer>
                    <StyledIconWrapper>
                        <IoSearchOutline />
                    </StyledIconWrapper>
                    <StyledInput
                        placeholder="Search for 'heels'"
                        type='search'
                        autoComplete='off'
                        autoCorrect='off'
                        autoCapitalize='off'
                        spellCheck='false'
                        onChange={onChangeHandler}
                        value={value}
                        onBlur={handleBlur}
                    />
                    {type === 'header' && (
                        <StyledButton type='button' onClick={closeInputHandler}>
                            <LiaTimesSolid />
                        </StyledButton>
                    )}
                </StyledInputContainer>
            </form>
        </StyledInputWrapper>
    );
}

export default SearchInput;
