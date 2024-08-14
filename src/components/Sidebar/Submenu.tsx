import { GoArrowLeft } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

import { StyledHeader, StyledSubmenu } from './Submenu.styled';

interface SubmenuProps {
    isOpen: boolean;
    children?: React.ReactNode;
    slideFrom: 'left' | 'right';
    depth?: number;
    navLink: string;
    navLinkClickHandler: () => void;
    title: string;
    goUpOneLevelHandler?: () => void;
}

function Submenu({
    isOpen,
    children,
    slideFrom,
    depth = 1,
    navLink,
    navLinkClickHandler,
    title,
    goUpOneLevelHandler,
}: SubmenuProps) {
    return (
        <StyledSubmenu $isOpen={isOpen ? true : false} $slideFrom={slideFrom} $depth={depth}>
            <StyledHeader>
                {/* {depth > 1 && goUpOneLevelHandler && <GoArrowLeft onClick={goUpOneLevelHandler} />} */}
                <GoArrowLeft onClick={goUpOneLevelHandler} />
                <NavLink to={navLink} onClick={navLinkClickHandler}>
                    <h2>{title}</h2>
                </NavLink>
            </StyledHeader>

            {children}
        </StyledSubmenu>
    );
}

export default Submenu;
