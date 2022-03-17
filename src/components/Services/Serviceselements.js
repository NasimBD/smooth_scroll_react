import styled from 'styled-components';

export const ServicesContainer  = styled.div`
background: hsl(223, 36%, 10%);
padding: 3rem 1rem;
`

export const Heading = styled.h2`
text-align: center;
color: white;
margin-bottom: 1.5rem;
text-transform: capitalize;
@media screen and (max-width:576px){
    font-size: 1.7rem;
}
@media screen and (min-width:576px){
    font-size: 2.5rem;
}
`

export const ServicesItems = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap: 16px;
max-width: 1200px;
margin: 0 auto;
@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0.5rem;
}
`

export const ServiceItem = styled.div`
height: 100%;
padding: 1.5rem;
background: white;
border-radius: 1rem;
display: flex;
flex-flow: column nowrap;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
  transform: scale(1.02);
  cursor: pointer;
}
`

export const ServiceIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 1.5rem;
`

export const ServiceH2 = styled.h2`
text-align: center;
margin-bottom: 1rem;
font-size: 1rem;
`

export const ServiceP = styled.p`
text-align: center;
line-height: 1.5;
font-size: 0.9rem;
`