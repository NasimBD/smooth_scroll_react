import React from 'react'
import { LinkButton } from '../Button/LinkButton'
import { BtnWrapper, CloseIcon, MdCloseIcon, SidebarContainer, SidebarItem, SidebarLink, SidebarMenu } from './SidebarElements'

export const Sidebar = ({isSidebarOpen, toggleSidebar}) => {
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <CloseIcon  onClick={toggleSidebar}>
        <MdCloseIcon/>
      </CloseIcon>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="about" onClick={toggleSidebar}  offset={-80}>
          About
          </SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink to="discover" onClick={toggleSidebar}  offset={-80}>
          Discover
          </SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink to="services" onClick={toggleSidebar}  offset={-80}>
          Services
          </SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink to="signup" onClick={toggleSidebar}  offset={-80}>
          Sign Up
          </SidebarLink>
        </SidebarItem>
      </SidebarMenu>

      <BtnWrapper>
        <LinkButton to="/signin" primary={true} textDark={true} big={true}>Sign In</LinkButton>
      </BtnWrapper>

    </SidebarContainer>
  )
}
