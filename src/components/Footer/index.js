import React from 'react'
import { CopyRight, FooterContainer, FooterInfo, FooterLogo, FooterMenu, FooterMenus, FooterMenuWrapper, MenuItem, MenuLink, MenuTitle, SocialMediaItem, SocialMediaWrapper } from './FooterElements'
import MenuData from './MenuData';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();


  return (
    <FooterContainer>
      <FooterMenus>
        {
          MenuData.map((menu, indx) => 
          <FooterMenuWrapper>
             <FooterMenu key="indx">
              <MenuTitle>{menu.title}</MenuTitle>  
          {
              menu.items.map((menuItem, indx) => 
              <MenuItem key={indx}>
                <MenuLink to={menuItem.url}>
                  {menuItem.name}
                </MenuLink>
              </MenuItem>
              )
          }
            </FooterMenu>
          </FooterMenuWrapper>
         
          )
        }
      </FooterMenus>

      <FooterInfo>
        <FooterLogo to="/">
          oBank
        </FooterLogo>
        <CopyRight>
          @copy; {year} All rights reserved
        </CopyRight>
        <SocialMediaWrapper>
          <SocialMediaItem href='' target="_blank" aria-label=""><FaFacebook/></SocialMediaItem>
          <SocialMediaItem href='' target="_blank" aria-label=""><FaInstagram/></SocialMediaItem>
          <SocialMediaItem href='' target="_blank" aria-label=""><FaYoutube/></SocialMediaItem>
          <SocialMediaItem href='' target="_blank" aria-label=""><FaTwitter/></SocialMediaItem>
          <SocialMediaItem href='' target="_blank" aria-label=""><FaLinkedin/></SocialMediaItem>
        </SocialMediaWrapper>
      </FooterInfo>
    </FooterContainer>
  )
}