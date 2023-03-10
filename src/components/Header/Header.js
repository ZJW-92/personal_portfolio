import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiDwarfFace } from 'react-icons/gi';
import { SiGmail } from 'react-icons/si';
import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import {AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen,AiOutlineUser} from "react-icons/ai";

const Header = () =>  (
 <Container>
  <Div1>
    <Link href="/">
      <a style ={ { display:"flex", alignItems:"center", color:"#e6c18f", marginBottom:'20px'}}>
      <GiDwarfFace size= "4rem" /> <Span>志杰</Span>
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink> Projects </NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink> Technologies </NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink> About </NavLink>
      </Link>
    </li>
    <li>
      <Link href="CV_Zhijie.pdf" download= "cv_eng_Zhijie.pdf">
        <NavLink> Resume </NavLink>
      </Link>
    </li>
  </Div2>
  <Div3> 
    <SocialIcons href="https://github.com/ZJW-92/">
      <AiFillGithub size="4rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/zhijie-wei-858895219/">
      <AiFillLinkedin size="4rem" />
    </SocialIcons>
    <SocialIcons href="mailto:zjwei0201@gmail.com">
      <SiGmail size="4rem" />
    </SocialIcons>
  </Div3>
 </Container>
);

export default Header;
