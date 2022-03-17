import React, { useState } from 'react'
import { BtnCenterWrapper } from '../Button/BtnCenterWrapper';
import { ScrollButton } from '../Button/ScrollButton';
import { ArrowRight, ChevronRight, HeaderContainer, HeaderContent, HeaderH1, HeaderP, VideoBackground } from './HeaderElements';
import { Navbar } from '../Navbar';
import BgVideo from '../../videos/video.mp4';

export const Header = ({isSidebarOpen, toggleSidebar}) => {
    const [hover, setHover] = useState(false);

    const handleBtnHover = () => {
        setHover(!hover);
    }

  return (
    <HeaderContainer id="home">
        <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        />
            <VideoBackground muted autoPlay loop>
                <source src={BgVideo} type="video/mp4"/>
            </VideoBackground>
            <HeaderContent>
                <HeaderH1>Virtual banking made easy</HeaderH1>
                <HeaderP>Sign up for a new account today and receive $250 in credit towards your next payment.</HeaderP>
                <BtnCenterWrapper>
                    <ScrollButton 
                    to="/"
                    primary={true}
                    textDark={true}
                    onMouseEnter={handleBtnHover}
                    onMouseLeave={handleBtnHover}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    >
                        Get Started {hover ? <ArrowRight/> : <ChevronRight/>}
                    </ScrollButton>
                </BtnCenterWrapper>
            </HeaderContent>
  </HeaderContainer>
  )
}
