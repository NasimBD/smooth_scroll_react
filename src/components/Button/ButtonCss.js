import { css } from 'styled-components';

export const ButtonCss = css`
display: inline-flex;
justify-content: center;
align-items: center;
text-decoration: none;
font-size : 1rem;
border-radius: 5rem;
padding: ${({big}) => big ? '1rem 3.5rem' : '0.5rem 1.3rem'};
background-color: ${({primary}) => primary ? '#01BF71' : '#010606'};
color: ${({textDark}) => textDark ? '#010606' : '#fff'};
cursor: pointer;
transition: 0.2s ease-in-out;


:hover{
    background-color: ${({primary}) => primary ? '#fff' : '#01BF71'};
}
`