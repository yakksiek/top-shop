import { CiMenuBurger } from 'react-icons/ci';
import { IoSearchOutline } from 'react-icons/io5';
import { VscClose } from 'react-icons/vsc';
import StyledNavigation from './StyledNavigation';
import styled from 'styled-components';
import { useState } from 'react';

const MenuButton = styled.button`
    border: none;
    background: transparent;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    overflow: hidden;
    position: relative;

    width: 60px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .burger {
        display: block;
        height: 3px;
        width: 100%;
        background: black;
        transition: all 0.3s ease;
    }
`;

const StyledLabel = styled.span`
    color: transparent;
    padding-right: 0.5rem;

    .text {
        position: absolute;
        color: red;
        top: 50%;
        left: 70%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease-in-out;
        transform-origin: center center;
    }

    .text-enter {
        transform: translate(-50%, 150%);
    }

    .text-exit {
        transform: translate(-50%, -150%);
    }
`;

const StyledButton = styled.button`
    border: none;
    background: transparent;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

function Menu() {
    const [isMenuOpen, setIsOpenMenu] = useState(false);

    function handleOpenMenu() {
        setIsOpenMenu(prevState => !prevState);
    }

    console.log(isMenuOpen);

    return (
        <StyledNavigation>
            <li>
                <StyledButton onClick={handleOpenMenu}>
                    <span></span>
                    <span>
                        <span>Menu</span>
                        {/* <span>Close</span> */}
                    </span>
                </StyledButton>
            </li>
            <li>
                <IoSearchOutline />
                <span>Search</span>
            </li>
        </StyledNavigation>
    );
}

export default Menu;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const MenuButton = styled.button`
//     width: 30px;
//     height: 30px;
//     background: transparent;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     padding: 0;

//     div {
//         display: block;
//         height: 1px;
//         width: 100%;
//         background: black;
//         transition: all 0.3s ease;
//     }
// `;

// const StyledNavigation = styled.nav`
//     /* Additional styling can be placed here */
// `;

// function Menu() {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <StyledNavigation>
//             <MenuButton onClick={handleToggle}>
//                 <div
//                     style={{
//                         transform: isOpen ? 'rotate(45deg) translate(5px, 9px)' : 'none',
//                     }}
//                 />
//                 <div
//                     style={{
//                         opacity: isOpen ? '0' : '1',
//                         transform: isOpen ? 'translateX(20px)' : 'none',
//                     }}
//                 />
//                 <div
//                     style={{
//                         transform: isOpen ? 'rotate(-45deg) translate(5px, -9px)' : 'none',
//                     }}
//                 />
//             </MenuButton>
//         </StyledNavigation>
//     );
// }

// export default Menu;

/// btn
{
    /* <li>
                <MenuButton onClick={handleOpenMenu}>
                    <div
                        className='burger'
                        style={{
                            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }}
                    />
                    <div
                        className='burger'
                        style={{
                            opacity: isMenuOpen ? '0' : '1',
                            transform: isMenuOpen ? 'translateX(20px)' : 'none',
                        }}
                    />
                    <div
                        className='burger'
                        style={{
                            transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }}
                    />
                    <StyledLabel>
                        Menu
                        <div className={`text ${isMenuOpen ? 'text-exit' : ''}`}>{isMenuOpen ? 'Close' : 'Menu'}</div>
                        <div className={`text ${isMenuOpen ? '' : 'text-enter'}`}>{isMenuOpen ? 'Close' : 'Menu'}</div>
                    </StyledLabel>
                </MenuButton>
            </li> */
}
