import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 5, text: 'Courses pass with distinction', },
  { number: 25, text: 'Open Source Projects'},
  { number: 300, text: 'Total commits in 2022'}
];

const Accomplishments = () => (

 <Section>
  <SectionDivider /><br/>
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
