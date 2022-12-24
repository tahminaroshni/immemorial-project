import React, { useRef } from 'react';
import { useGsapSectionTitleReveal } from '../hooks/gsap';

const About = () => {
  const aboutRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useGsapSectionTitleReveal(sectionTitleRef, aboutRef);
  return (
    <section className='wrapper' ref={aboutRef}>
      <h6 className='section-title' ref={sectionTitleRef}>About</h6>
      <div className="about">
        <span>Explore the lost treasures and shining stars of the 1990s! Find your favorite cartoons, TV shows, music albums, & more with easy filtering functionality. With Immemorial, stay up-to-date with all your 90s favorites while turning back time.</span>
        <span>What's the only era that never seems to end? The 90s! Journey through appreciating items from 90s TV, music, and art. See if you remember old toys, cartoons, or prints of such. Indulge in some nostalgia before our world falls back into the dark ages.</span>
      </div>
    </section>
  );
};

export default About;