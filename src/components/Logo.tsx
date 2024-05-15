import Heading from './Heading';

interface LogoProps {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

function Logo({ as }: LogoProps) {
    return <Heading as={as}>TOP SHOP</Heading>;
}

export default Logo;
