import React from 'react'
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import { Heading, ServiceH2, ServiceIcon, ServiceItem, ServiceP, ServicesContainer, ServicesItems } from './Serviceselements';

export const Services = () => {
  return (
    <ServicesContainer id="services">
        <Heading>Our services</Heading>
            <ServicesItems>
                  <ServiceItem>
                    <ServiceIcon src={Icon1} alt='oBank'></ServiceIcon>
                    <ServiceH2>Reduce expenses</ServiceH2>
                    <ServiceP>We help reduce your fees and increase your overall revenue.</ServiceP>
                  </ServiceItem>
               
                  <ServiceItem>
                    <ServiceIcon src={Icon2} alt='oBank'></ServiceIcon>
                    <ServiceH2>Virtual offices</ServiceH2>
                    <ServiceP>You can access our platforms online anywhere in the world</ServiceP>
                  </ServiceItem>
                
                  <ServiceItem>
                    <ServiceIcon src={Icon3} alt='oBank'></ServiceIcon>
                    <ServiceH2>Premium Benefits</ServiceH2>
                    <ServiceP>Unlock our special membership card that returns 5% cash back.</ServiceP>
                  </ServiceItem>
                
            </ServicesItems>
    </ServicesContainer>
  )
}
