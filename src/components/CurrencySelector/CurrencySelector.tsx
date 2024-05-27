import styled from 'styled-components';
import { CURRENCIES } from '../../contants/currencies';

const StyledSelector = styled.select`
    /* padding: 0.5rem; */
`;

function CurrencySelector() {
    return (
        <StyledSelector>
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </StyledSelector>
    );
}

export default CurrencySelector;
