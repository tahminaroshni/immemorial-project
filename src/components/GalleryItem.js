import React, { useRef } from 'react';
import { useGsapGalleryCategoryReveal, useGsapGalleryImageReveal, useGsapGalleryTitleLeftAnimation } from '../hooks/gsap';

const GalleryItem = ({ items }) => {
  const galleryItemRef = useRef(null);
  const galleryImageRef = useRef(null);
  const galleryTitleRef = useRef(null);
  const galleryCategoryRef = useRef(null);

  useGsapGalleryImageReveal(galleryImageRef);
  useGsapGalleryCategoryReveal(galleryCategoryRef, galleryImageRef);
  useGsapGalleryTitleLeftAnimation(galleryTitleRef, galleryItemRef);

  return (
    <div className='gallery-item wrapper' ref={galleryItemRef}>
      <div className="gallery-image"
        ref={galleryImageRef}
        style={{
          backgroundImage: `url(${items.src})`
        }}></div>
      <p className='gallery-category' ref={galleryCategoryRef}>{items.category}</p>
      <h2 className="gallery-title" ref={galleryTitleRef}>{items.title}</h2>
    </div>
  );
};

export default GalleryItem;