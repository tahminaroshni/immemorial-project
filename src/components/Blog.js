import gsap, { Expo } from 'gsap';
import { useRef } from 'react';

const Blog = ({ blog }) => {
  const blogTextRef = useRef(null);
  const overlayRef = useRef(null);

  const textReveal = (item) => {
    const el = item.current;
    gsap.fromTo(el,
      {
        y: '100%',
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: Expo.easeInOut,
      })
  }

  const handleMouseEnter = () => {
    // blogTextRef.current.style.opacity = 1;
    overlayRef.current.style.opacity = 0.7;
    textReveal(blogTextRef);
    console.log(blogTextRef.current);
  }

  const handleMouseLeave = () => {
    overlayRef.current.style.opacity = 0;
    blogTextRef.current.style.opacity = 0;
    console.log(blogTextRef.current);
  }

  return (
    <>
      <div className="blog"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: `url(${blog.src})`, gridArea: `c${blog.id}` }}>
        <div className='blog-texts' ref={blogTextRef}>
          <h3 className='blog-title'>{blog.title}</h3>
          <p className='blog-description'>{blog.description}</p>
        </div>
        <div className="overlay" ref={overlayRef}></div>
      </div>
    </>
  );
};

export default Blog;