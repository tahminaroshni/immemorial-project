import React, { useRef } from 'react';
import { useGsapFooterTitleAnimation } from '../hooks/gsap';

const Footer = () => {
  const footerRef = useRef(null);
  const footerTitleRef = useRef(null);

  useGsapFooterTitleAnimation(footerTitleRef, footerRef);

  return (
    <section className='footer wrapper' ref={footerRef}>
      <h2 className='footer-title' ref={footerTitleRef}>bonjour</h2>
      <p>&copy; {new Date().getFullYear()} Immemorial. Crafted by yours truly</p>
    </section>
  );
};

export default Footer;