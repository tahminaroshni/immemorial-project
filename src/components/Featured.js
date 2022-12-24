import React, { useRef } from 'react';
import { useGsapFeatureLeftShutterReveal, useGsapFeatureRightShutterReveal, useGsapSectionTitleReveal } from '../hooks/gsap'

const Featured = () => {
  const featureRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterReveal(featureLeftShutterRef, 0, featureRef);
  useGsapFeatureRightShutterReveal(featureRightShutterRef, 0, featureRef);
  useGsapSectionTitleReveal(sectionTitleRef, featureRef);

  return (
    <section className='wrapper' ref={featureRef}>
      <h6 className='section-title' ref={sectionTitleRef}>Featured</h6>
      <div className="feature">
        <div className="feature-l">
          <h4 className='feature-l-title'>90's telephone</h4>
          <img src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span ref={featureLeftShutterRef}></span>
        </div>
        <div className="feature-r">
          <h4 className='feature-r-title'>90's cassette player</h4>
          <img src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span ref={featureRightShutterRef}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;