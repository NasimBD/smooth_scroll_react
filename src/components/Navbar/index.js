import React, { useEffect, useState } from 'react'
import { Bars, Nav, NavLinkBtnWrapper, NavLogo, NavMenu, NavMenuItem, NavMenuLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import { LinkButton } from '../Button/LinkButton';
import { Sidebar } from '../Sidebar';

export const Navbar = ({isSidebarOpen, toggleSidebar}) => {
  const [scrolledWin, setScrolledWin] = useState(false);


  const checkScroll = () => {
    if (window.scrollY > 80){
      setScrolledWin(true);
    } else{
      setScrolledWin(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [scrolledWin]);
  

  const scrollToHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrolledWin={scrolledWin}>
      <NavLogo to="/" onClick={scrollToHome}>oBank</NavLogo>
      <Bars onClick={toggleSidebar}/>
      <Sidebar
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
      />
      <NavMenu>
        <NavMenuItem>
          <NavMenuLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
          >
            About
          </NavMenuLink>
        </NavMenuItem>
      
        <NavMenuItem>
          <NavMenuLink
          to="discover"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
          >
            Discover
          </NavMenuLink>
        </NavMenuItem>

        <NavMenuItem>
          <NavMenuLink
          to="services"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
          >
            Services
          </NavMenuLink>
        </NavMenuItem>

        <NavMenuItem>
          <NavMenuLink
          to="signup"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
          >
            Sign Up
          </NavMenuLink>
        </NavMenuItem>

      </NavMenu>
      <NavLinkBtnWrapper>
        <LinkButton primary={true} textDark={true} to="/signin">Sign In</LinkButton>
      </NavLinkBtnWrapper>
    </Nav>
  )
}
