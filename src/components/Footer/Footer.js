import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { SocialIcons } from '../Header/HeaderStyles';
import { GiDwarfFace } from 'react-icons/gi';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import Link from 'next/link';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
    <Link href="/">
  
      <a style ={ { display:"flex", alignItems:"center", color:"#e6c18f", marginBottom:'20px'}}>
      <GiDwarfFace size= "4rem" /> <span>Zhijie</span>
      </a>
    </Link>
    <LinkColumn>  
    <LinkTitle>Contact Me</LinkTitle>
    <LinkItem href="mailto:zjwei0201@gmail.com">zjwei0201@gmail.com</LinkItem> 
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>Github</LinkTitle>
    <LinkItem href="https://github.com/ZJW-92/">GitHub</LinkItem> 
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>LinkedIn</LinkTitle>
    <LinkItem href="https://www.linkedin.com/in/zhijie-wei-858895219/">LinkedIn</LinkItem> 
    </LinkColumn>
    </LinkList>
   </FooterWrapper>

  );
};

export default Footer;
