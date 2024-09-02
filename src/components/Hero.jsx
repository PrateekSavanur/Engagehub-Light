import { useRef, useEffect } from "react";
import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import CompanyLogos from "./CompanyLogos";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      techOrder: ["youtube"],
      sources: [
        {
          src: "https://www.youtube.com/watch?v=bH4cwAtqRx4",
          type: "video/youtube",
        },
      ],
      controls: false,
      autoplay: true,
      loop: true,
      preload: "auto",
      fluid: true,
      youtube: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
      },
    });

    const handlePlayVideo = () => {
      player.play();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handlePlayVideo();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={sectionRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 text-5xl mb-6">
            <span className="inline-block relative">
              ENGAGEHUB
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            <br />
            <br />
            Your Gateway to Smart WhatsApp Marketing and Stellar Reviews
            <br />
            <br />
          </h1>
          <Button href="./pricing" white>
            Get Started
          </Button>
          <div className="w-full flex justify-center my-6 lg:mb-8">
            <div data-vjs-player>
              <video
                ref={videoRef}
                className="video-js vjs-default-skin"
                controls
                autoPlay
                loop
                playsInline
              />
            </div>
          </div>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
