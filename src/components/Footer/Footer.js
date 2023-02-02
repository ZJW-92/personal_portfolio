import React from 'react';
import { GiDwarfFace } from 'react-icons/gi';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Span } from './FooterStyles';
import Link from 'next/link';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
    <Link href="/">
      <a style ={ { display:"flex", alignItems:"center", color:"#e6c18f", marginBottom:'20px'}}>
      <GiDwarfFace size= "4rem" /><Span>志杰</Span>
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
