import React, { useRef } from 'react';
import { useGsapPhotoDropping, useGsapPhotoLevitate, useGsapShutterUnveil } from '../hooks/gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const etherialRef = useRef(null);
  const canvasRef = useRef(null);

  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);
  const imageThreeRef = useRef(null);
  const imageFourRef = useRef(null);
  const imageFiveRef = useRef(null);

  const imagesArr = [imageOneRef, imageTwoRef, imageThreeRef, imageFourRef, imageFiveRef];

  useGsapShutterUnveil(etherialRef, 2.5, heroRef);
  useGsapShutterUnveil(canvasRef, 2.8, heroRef);

  useGsapPhotoDropping(imagesArr, 3, heroRef);
  useGsapPhotoLevitate(imagesArr, heroRef);

  return (
    <section className='hero wrapper' ref={heroRef}>
      <h1 className='etherial'>Etherial <span ref={etherialRef}></span></h1>
      <h1 className='canvas' >Canvas <span ref={canvasRef}></span></h1>
      <div className="images">
        <div className="image one"
          ref={imageOneRef}
          style={{ backgroundImage: "url('https://images.pexels.com/photos/10046283/pexels-photo-10046283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') " }}
        ></div>
        <div className="image two"
          ref={imageTwoRef}
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="image three"
          ref={imageThreeRef}
          style={{ backgroundImage: "url('https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="image four"
          ref={imageFourRef}
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="image five"
          ref={imageFiveRef}
          style={{ backgroundImage: "url('https://images.pexels.com/photos/4836368/pexels-photo-4836368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;

//image two:  "url('https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

