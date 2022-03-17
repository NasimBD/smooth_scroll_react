import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { css } from 'styled-components';

export const FooterContainer = styled.div`
background-color: hsl(223, 36%, 10%);
color: #fff;

@media screen and (max-width:576px){
    padding: 1rem;
}
@media screen and (min-width:576px){
    padding: 4rem 2rem;
}
`

export const FooterMenus = styled.div`
display: grid;
@media screen and (max-width:350px){
    grid-template-columns: 1fr;
}
@media screen and (min-width:350px) and (max-width:800px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (min-width:800px){
    grid-template-columns: repeat(4, 1fr);
}
`;

export const FooterMenuWrapper = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
`

export const MenuTitle = styled.h4`
margin-bottom: 0.4rem;
`

export const FooterMenu = styled.ul`
list-style-type: none;
margin-bottom: 1.5rem;
`;



export const MenuItem = styled.li`

`;

const LinkCss = css`
text-decoration: none;
cursor: pointer;
display: flex;
align-items: center;
`;

export const MenuLink = styled(Link)`
${LinkCss};
color: white;
font-size: 0.8rem;
transition: 0.4s;
height: 1.3rem;

:hover{
    color: hsl(155, 93%, 38%);
}
`;


export const FooterInfo = styled.div`
Margin-top: 1.5rem;
display: flex;
align-items: center;
padding-top: 1rem;
border-top: solid 1px rgba(255, 255, 255, 0.1);
@media screen and (max-width: 800px){
    flex-flow: column nowrap;
    gap: 0.8rem;
}
@media screen and (min-width:800px){
    justify-content: space-evenly;
}
`;


export const FooterLogo = styled(Link)`
${LinkCss};
color: white;
font-size: 1.1rem;
font-weight: bold;
`;


export const CopyRight = styled.p`
font-size: 0.8rem;
opacity: 0.6;
`;


export const SocialMediaWrapper = styled.div`
display: flex;
gap: 0.7rem;
`;


export const SocialMediaItem = styled.a`
${LinkCss};
color: white;
font-size: 1.5rem;
transition: 0.4s;

:hover{
color: hsl(155, 93%, 38%);
}
`;