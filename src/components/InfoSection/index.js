import React from 'react'
import { ScrollButton } from '../Button/ScrollButton'
import { Heading, ImgWrapper, InfoContainer, InfoContent, InfoWrapper, Subtitle, TopLine } from './InfoSectionElements'

export const InfoSection = ({lightBg, id, imgStart,topLine, headline, lightText, description, buttonLabel, img, alt, primary, dark}) => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper imgStart={imgStart}>
            <InfoContent>
                <TopLine>
                    {topLine}
                </TopLine>

                <Heading lightText={lightText}>
                    {headline}
                </Heading>

                <Subtitle lightText={lightText}>
                    {description}
                </Subtitle>

                    <ScrollButton
                    to="home"
                    primary={primary ? true : false}
                    textDark={dark ? true : false}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    >
                        {buttonLabel}
                    </ScrollButton>
            </InfoContent>
            <ImgWrapper>
                <img src={img} alt={id}/>
            </ImgWrapper>
        </InfoWrapper>
    </InfoContainer>
  )
}
