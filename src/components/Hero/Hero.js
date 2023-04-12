import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = (props) => (  
  <Section row nopadding>
   <LeftSection> 
   <SectionTitle main center>
     <Span>Welcome To Zhijie's Portfolio </Span>
     <img src="https://media2.giphy.com/media/ZGHpWzdOEkMKtwLqdc/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="60" />
    </SectionTitle>
    <SectionText>  
    ⭑ Born in Shanghai, China🇨🇳 and studied in Gothenburg, Sweden🇸🇪. <br/>
    ⭑ I am a Software Engineering and Management graduate at University of Gothenburg in 2022. <br/>
    ⭑ Currently I am seeking a job as a Matlab/Simulink/ Image processing/ Computer Vision Engineer. 
    </SectionText>
    <Button onClick={() => window.location.href="mailto:zjwei0201@gmail.com"}> Get In Touch </Button>
    </LeftSection>
  </Section>
);

export default Hero;