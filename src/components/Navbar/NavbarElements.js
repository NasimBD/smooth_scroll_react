import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {Link as ScrollLink } from 'react-scroll';

export const Nav = styled.nav`
height: 80px;
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index:10;
display: flex;
justify-content: space-between;
padding: 1.5rem;
background-color: ${({scrolledWin}) => scrolledWin ? '#000' : 'transparent'};
transition: 0.4s;
`;

const LinkCss = css`
text-decoration: none;
cursor: pointer;
`;

export const NavLogo = styled(RouterLink)`
${LinkCss};
color: white;
font-weight: bold;
`

export const NavMenu = styled.ul`
@media screen and (max-width: 800px){
    display: none;
}
list-style-type: none;
display: flex;
align-items: center;
`

export const NavMenuItem = styled.li`
margin-right: 2px;
`

export const NavMenuLink = styled(ScrollLink)`
${LinkCss};
color: white;
display: block;
padding: .6rem 1rem;
 
&.active{
    border-bottom: 3px solid #01bf71;
  }
`

export const Bars = styled(FaBars)`
${LinkCss};
color: white;
font-size: 1.7rem;
@media screen and (min-width: 800px){
    display: none;
}
`

export const NavLinkBtnWrapper = styled.div`
@media screen and (max-width: 800px){
    display: none;
}
`

