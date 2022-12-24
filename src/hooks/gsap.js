import gsap, { Expo } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


// For Navbar
export const useGsapDownStagger = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map(item => item.current);

    gsap.fromTo(el,
      {
        y: '-100vh',
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: Expo.easeInOut,
        delay: delay
      })
  }, [])
}

export const useGsapLogoReveal = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        y: '100%',
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay
      })
  }, [])
}

// For Hero Section
export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        height: '100%'
      },
      {
        height: 0,
        duration: 2,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: 'play reverse play reverse'
        }
      })
  }, [])
}

export const useGsapPhotoDropping = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map(item => item.current);

    gsap.fromTo(el,
      {
        y: '-100vh',
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: Expo.easeInOut,
        stagger: 0.3
      })
  }, [])
}

export const useGsapPhotoLevitate = (items, trig) => {
  useEffect(() => {
    const el = items.map(item => item.current);

    gsap.fromTo(el,
      {
        y: 0,
      },
      {
        y: '-100%',
        duration: 2,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: 'play reverse play reverse',
        }
      })
  }, [])
}

// For Section Title
export const useGsapSectionTitleReveal = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        x: '-100vw',
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: 'play'
        }
      })
  }, [])
}

// For Feature Section
export const useGsapFeatureLeftShutterReveal = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        height: '100%'
      },
      {
        height: 0,
        duration: 1,
        delay: delay,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          start: 'top 50%',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse',
        }
      })
  }, [])
}

export const useGsapFeatureRightShutterReveal = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        width: '100%'
      },
      {
        width: 0,
        duration: 1,
        delay: delay,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          start: 'top 50%',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse',
        }
      })
  }, [])
}

// For Gallery Section
export const useGsapGalleryImageReveal = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        width: 0,
        x: 0
      },
      {
        width: "100%",
        x: '30%',
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse'
        }
      })
  }, [])
}

export const useGsapGalleryCategoryReveal = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        x: '-100%',
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: 'top center',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse'
        }
      })
  }, [])
}

export const useGsapGalleryTitleLeftAnimation = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        x: '30%',
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: 'top center',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse'
        }
      })
  }, [])
}

// For Footer Section
export const useGsapFooterTitleAnimation = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        y: '-100%',
      },
      {
        y: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: 'play'
        }
      })
  }, [])
}