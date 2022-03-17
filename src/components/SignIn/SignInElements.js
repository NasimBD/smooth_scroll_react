import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';


export const Container = styled.div`
background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
min-height: 100vh;
padding: 1.5rem;
`;

const LinkCss = css`
text-decoration: none;
cursor: pointer;
color: #fff;
`;


export const Logo = styled(Link)`
${LinkCss};
font-size: 2rem;
font-weight: bold;
`;


export const FormContainer = styled.div`
width: 100%;
max-width: 400px;
margin: 3rem auto 1rem;
background-color: #010101;
border-radius: 8px;

`;


export const FormHeading = styled.h3`
color: white;
text-align: center;
margin-bottom: 2rem;
padding-top: 1rem;
font-size: 1.4rem;
font-weight: normal;
`;


export const FormWrapper = styled.div`
width: 85%;
margin: 0 auto;
`;


export const Form = styled.form`
display: grid;
`;


export const FormLabel = styled.label`
color: #fff;
margin-bottom: 0.5rem;
font-size: 0.9rem;
`;


export const FormInput = styled.input`
border: none;
border-radius: 5px;
padding: 0.8rem;
color: gray;
margin-bottom: 1.5rem;

:focus{
    outline: none;
}
`;


export const FormBtn = styled.button`
background-color: hsl(155, 93%, 38%);
padding: 1rem;
border: none;
border-radius: 8px;
color: white;
margin-top: 2rem;
font-size: 1.2rem;
cursor: pointer;
`;


export const LinkComp = styled.a`
${LinkCss};
display: block;
text-align: center;
padding: 1rem;
`;
