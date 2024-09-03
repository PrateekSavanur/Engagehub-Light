import { useRef, useEffect } from "react";
import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import CompanyLogos from "./CompanyLogos";
import ReactPlayer from "react-player";

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.internalPlayer.playVideo();
    }
  };

  useEffect(() => {
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
          </h1>
          {/* <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p> */}
          <div className="mb-5">
            <Button href="./pricing" white>
              Get Started
            </Button>
          </div>
          <div className="w-full flex justify-center pb-8 lg:mb-8">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=bH4cwAtqRx4&modestbranding=1&showinfo=0&rel=0"
              playing={true}
              loop={true}
              controls={false}
              ref={videoRef}
              width={580}
              height={330}
            />
          </div>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
