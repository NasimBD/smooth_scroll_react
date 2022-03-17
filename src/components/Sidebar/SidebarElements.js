import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';
import {Link as ScrollLink } from 'react-scroll';

export const SidebarContainer = styled.div`
position: absolute;
top: ${({isSidebarOpen}) => isSidebarOpen ? '0' : '-100vh' };
right: 0;
width: 100%;
height: 100vh;
background-color: #000;
opacity:  ${({isSidebarOpen}) => isSidebarOpen ? '1' : '0' };
transition: 0.4s;
display: flex;
flex-flow: column nowrap;
justify-content: center;

@media screen and (min-width: 800px){
    display: none;
}
`

const LinkCss = css`
text-decoration: none;
cursor: pointer;
`;


export const CloseIcon = styled.span`
position: absolute;
top: 1.5rem;
right: 1.5rem;
cursor: pointer;
`

export const MdCloseIcon = styled(MdClose)`
${LinkCss};
color: white;
font-size: 1.7rem;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 80px;
 
@media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
    margin-bottom: 60px;
  }
`

export const SidebarItem = styled.li`
`

export const SidebarLink = styled(ScrollLink)`
${LinkCss};
color: white;
height: 100%; 
display: flex;
align-items: center;
justify-content: center;
height: 100%; 
font-size: 1.5rem;
transition: 0.4s;

:hover{
    color: #007860;
}
`

export const BtnWrapper = styled.div`
text-align: center;
`
