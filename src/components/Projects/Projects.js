import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
   <Section no padding id= "projects">
  {/* <SectionDivider /> */}
  <img src="https://raw.githubusercontent.com/khoa083/khoa/main/Khoa_ne/img/Rainbow.gif" width="180%"/>
    <SectionTitle main>Projects </SectionTitle>
    <GridContainer>
      {projects.map (({id, image, title, description, tags, visit, demo}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <Hr />
          <div><TitleContent>
           Tech Stack 
            <TagList> 
              {tags.map((tag,i)=> (
                <Tag key={i}> {tag} </Tag>
              ))}
            </TagList>
            </TitleContent>
            </div>
            <UtilityList>
            <ExternalLinks href={demo}>View Demo</ExternalLinks>
            <ExternalLinks href={visit}>View code</ExternalLinks>
            </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <></>
 

   </Section>
);

export default Projects;