import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGsapDownStagger, useGsapLogoReveal } from '../hooks/gsap';

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const logoRef = useRef(null);
  const favouriteRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favouritesArr = [favouriteRef];

  useGsapDownStagger(liArr);
  useGsapLogoReveal(logoRef, 1.5);
  useGsapDownStagger(favouritesArr, 2);

  return (
    <nav className='wrapper'>
      <ul className="links">
        <li ref={li1}><Link to='/featured'>Featured</Link></li>
        <li ref={li2}><Link to='/about'>About</Link></li>
        <li ref={li3}><Link to='/gallery'>Gallery</Link></li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to='/'>Immemorial</Link>
      </div>
      <div className="favourites-blog">
        <li ref={favouriteRef}><Link to='/favourites-blog'>Favourites</Link></li>
      </div>
    </nav>
  );
};

export default Navbar;