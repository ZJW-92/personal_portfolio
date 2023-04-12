import React from 'react';
import { BsTerminal } from 'react-icons/bs'
import{FaReact ,FaDatabase, FaJenkins} from 'react-icons/fa'
import {GiBrain} from 'react-icons/gi'
import{ImEmbed2} from 'react-icons/im'
import { Section,SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (

<Section id="tech">
  {/* <SectionDivider/> */}
  <img src="https://raw.githubusercontent.com/khoa083/khoa/main/Khoa_ne/img/Rainbow.gif" width="180%"/>
  <br/><br/><br/>
  <SectionTitle> Technologies</SectionTitle>
   <List>
    <ListItem>
      <FaReact size="4rem"></FaReact>
      <ListContainer>
        <ListTitle> Frontend  </ListTitle>
        <ListParagraph>
         Html5, CSS, JavaScript, React.js, Bootstrap, Next.js, Material-UI, TailwindCSS, styled-components, Vite
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FaDatabase size="4rem"></FaDatabase>
      <ListContainer>
        <ListTitle> Backend  </ListTitle>
        <ListParagraph>
          Express.js, Node.js, npm, Django, Mongodb
        </ListParagraph>
      </ListContainer>
    </ListItem>
   
    <ListItem>  
      <GiBrain size="4rem"></GiBrain>
      <ListContainer>
        <ListTitle> Machine Learning </ListTitle>
        <ListParagraph>
          Python, Anaconda, Keras, Tensorflow, Pandas
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <ImEmbed2 size="4rem"/>
      <ListContainer>
        <ListTitle> Matlab/Simulink</ListTitle>
        <ListParagraph>
      
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <BsTerminal size="4rem"></BsTerminal>
      <ListContainer>
        <ListTitle>Image processing & Computer Vision</ListTitle>
        <ListParagraph>
        </ListParagraph>
      </ListContainer>
    </ListItem>
   </List>
</Section>
);

export default Technologies;
