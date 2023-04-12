import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
   const carouselRef = useRef();

   const scroll = (node, left) => {
   return node.scrollTo({ left, behavior: 'smooth' });
   }

  const handleClick = (e, i) => {
   e.preventDefault();
   if (carouselRef.current) {
   const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
   scroll(carouselRef.current, scrollLeft);
   }
  }

   const handleScroll = () => {
   if (carouselRef.current) {
     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);
    setActiveItem(index);
   }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
    useEffect(() => {
    const handleResize = () => {
    scroll(carouselRef.current, 0);
   }
   window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      {/* <SectionDivider /> */}
      <img src="https://raw.githubusercontent.com/khoa083/khoa/main/Khoa_ne/img/Rainbow.gif" width="180%"/>
      <br/><br/><br/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      ⭑ I have genuine passion for data analysis, machine learning, image processing, computer vision, simulations and embedded systems. 
    <br/> 
    ⭑ I am careful, resistant to stress, self-motivated with a strong desire to learn new things and like to take my own initiative.
    <br/>
    ⭑ I am active, like to cooperate in teamwork and open to new ideas and willing to listen to advice.
    <br/>
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll} >
        <>
        {TimeLineData.map((item, index) =>(
         <CarouselMobileScrollNode key={index} final= {index=== TOTAL_CAROUSEL_COUNT -1}>
          <CarouselItem
            index={index}
            id={`carousel_item - ${index}`}
            active={activeItem}
            onClick={(e) => handleClick(e,index) }
            > 
          <CarouselItemTitle>{item.year}</CarouselItemTitle>
           <CarouselItemText>{item.text} </CarouselItemText>
          </CarouselItem> 
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item,index) => (
          <CarouselButton
          key={index}
          index= {index}
          active={activeItem}
          onClick={(e)=> handleClick(e, index)}
          type="button"
          >
          <CarouselButtonDot  active= {activeItem} />
      </CarouselButton>
        ))}
      </CarouselButtons>
 
    </Section>
  );
};

export default Timeline;
