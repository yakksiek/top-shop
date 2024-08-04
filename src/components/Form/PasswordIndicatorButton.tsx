import { BiShow, BiHide } from 'react-icons/bi';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 23%;
    right: 10px;
`;

interface PasswordIndicatorProps {
    revealHandler: (value: boolean) => void;
    showPassword: boolean;
}

function PasswordIndicator({ revealHandler, showPassword }: PasswordIndicatorProps) {
    return (
        <StyledButton type='button' onClick={() => revealHandler(!showPassword)}>
            {showPassword ? <BiHide /> : <BiShow />}
        </StyledButton>
    );
}

export default PasswordIndicator;
