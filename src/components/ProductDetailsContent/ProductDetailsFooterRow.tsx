import { SlArrowRight } from 'react-icons/sl';

interface ProductDetailsFooterRowProps {
    label: string;
    onClick: () => void;
}

function ProductDetailsFooterRow({ label, onClick }: ProductDetailsFooterRowProps) {
    return (
        <div className='row' onClick={onClick}>
            <span>{label}</span>
            <SlArrowRight />
        </div>
    );
}

export default ProductDetailsFooterRow;
