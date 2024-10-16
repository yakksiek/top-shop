import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';

function OverviewMyOrders() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div>
            <p>There are no current orders</p>
            <Button fill={true} onClick={handleClick}>
                Start Shopping
            </Button>
        </div>
    );
}

export default OverviewMyOrders;
