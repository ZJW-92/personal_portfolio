import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 5, text: 'Courses pass with distinction', },
  { number: 25, text: 'Open Source Projects'},
  { number: 300, text: 'Total commits in 2022'}
];

const Accomplishments = () => (

 <Section>
  {/* <SectionDivider /> */}
  <img src="https://raw.githubusercontent.com/khoa083/khoa/main/Khoa_ne/img/Rainbow.gif" width="180%"/>
  <br/><br/><br/>
  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index) =>(
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>


 </Section>

);

export default Accomplishments;
