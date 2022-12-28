import React from 'react';
import { BsTerminal } from 'react-icons/bs'
import{FaReact ,FaDatabase, FaJenkins} from 'react-icons/fa'
import {GiBrain} from 'react-icons/gi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (

<Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle> Technologies</SectionTitle>
  <SectionText> I have great passion for software development.
   Also, I am interested with Quality Assurance, Test Automation, DevOps, Machine Learning, Cloud Engineering and Business Intelligence. 
   </SectionText>
   <List>
    <ListItem>
      <FaReact size="4rem"></FaReact>
      <ListContainer>
        <ListTitle> Frontend  </ListTitle>
        <ListParagraph>
         Html, CSS, JavaScript, React.js, Bootstrap, Vue.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FaDatabase size="4rem"></FaDatabase>
      <ListContainer>
        <ListTitle> Backend  </ListTitle>
        <ListParagraph>
          Express.js, Node.js, npm, Django, mongodb, postgres
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>  
      <FaJenkins size="4rem"></FaJenkins>
      <ListContainer>
        <ListTitle> Testing  </ListTitle>
        <ListParagraph>
        Robot Framework, Selenium, Jenkins, Postman
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>  
      <GiBrain size="4rem"></GiBrain>
      <ListContainer>
        <ListTitle> Machine learning </ListTitle>
        <ListParagraph>
          Python, Anaconda, Keras, Tensorflow, Pandas, Numpy, Tableau
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>  
      <BsTerminal size="4rem"></BsTerminal>
      <ListContainer>
        <ListTitle> Others</ListTitle>
        <ListParagraph>
          Git, VmWare, Linux
        </ListParagraph>
      </ListContainer>
    </ListItem>
   </List>
</Section>
);

export default Technologies;
