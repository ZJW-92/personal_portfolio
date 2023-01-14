import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (  
  <Section row nopadding>
   <LeftSection> 
   <SectionTitle main center>
     Welcome To Zhijie's <br />
     Portfolio 
     <img src="https://media2.giphy.com/media/ZGHpWzdOEkMKtwLqdc/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="60" />
    </SectionTitle>
    <SectionText>  
    ⭑ Born in Shanghai (上海), China🇨🇳 and study in Gothenburg, Sweden🇸🇪. <br/>
    ⭑ I am a Software Engineering and Management graduate at University of Gothenburg in 2022. <br/>
    ⭑ Currently I am seeking a job of junior Software Engineer / Developer or UI/UX designer. 
    </SectionText>
    <Button onClick={() => window.location.href="mailto:zjwei0201@gmail.com"}> Get In Touch ☕️ </Button>
    </LeftSection>
  </Section>
);

export default Hero;