import React from 'react'
import { Container, Form, FormBtn, FormContainer, FormHeading, FormInput, FormLabel, FormWrapper, LinkComp, Logo } from './SignInElements'

export const SignIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <Container>
        <Logo to="/">
            oBank
        </Logo>
        <FormContainer>
            <FormHeading>Sign in to your account</FormHeading>
            <FormWrapper>
                <Form onSubmit={handleSubmit}>
                    <FormLabel htmlFor="">Email</FormLabel>
                    <FormInput type="email" id="email" required={true}/>

                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormInput type="password" id="password" required={true}/>

                    <FormBtn type="submit">Continue</FormBtn>
=               </Form>
                <LinkComp href="#">Forgot password</LinkComp>
            </FormWrapper>
        </FormContainer>
    </Container>
  )
}
