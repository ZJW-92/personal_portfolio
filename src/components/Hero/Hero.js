import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (  
  <Section row nopadding>
   <LeftSection> 
   <SectionTitle main center>
     Welcome To Zhijie's <br />
      Personal Portfolio 👋
    </SectionTitle>
    <SectionText>  
    Born in Shanghai (上海) and study in Gothenburg, Sweden🇸🇪. <br/>
    I am a Software Engineering and Management undergraduate student at University of Gothenburg in 2022. <br/>
    Currently I am seeking a job of junior software developer or junior QA tester. 
    </SectionText>
    <Button onClick={() => window.location.href="mailto:zjwei0201@gmail.com"}> Get In Touch ☕️ </Button>
    </LeftSection>
  </Section>
);

export default Hero;