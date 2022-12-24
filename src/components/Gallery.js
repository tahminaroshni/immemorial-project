import React, { useRef } from 'react';
import { useGsapSectionTitleReveal } from '../hooks/gsap';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/4842487/pexels-photo-4842487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Arcade playtime for 90's kids",
      category: "Arcade Games",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3356608/pexels-photo-3356608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "No signal - no transmission",
      category: "TV",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/12668238/pexels-photo-12668238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Retro Closures",
      category: "Boombox",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/12204293/pexels-photo-12204293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Vinyl Loveless Happiness",
      category: "Vinyl Record",
    },
  ];


  const galleryRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useGsapSectionTitleReveal(sectionTitleRef, galleryRef);

  return (
    <section ref={galleryRef}>
      <h6 className='section-title wrapper' ref={sectionTitleRef}>Gallery</h6>
      <div className="gallery">
        {
          galleryImages.map(galleryImage => <GalleryItem key={galleryImage.id} items={galleryImage} />)
        }
      </div>
    </section>
  );
};

export default Gallery;