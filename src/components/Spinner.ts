import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    width: 35px;
    height: 35px;
    border: 2px solid var(--color-black);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 0.7s linear infinite;
`;

export default Spinner;
