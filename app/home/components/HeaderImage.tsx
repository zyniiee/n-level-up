"use client";
import React, { useState, useEffect } from "react";

interface Image {
  id: string;
  src: string;
}

const HeaderImage: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showSatellites, setShowSatellites] = useState<boolean>(false);
  const [startImageToggle, setStartImageToggle] = useState<boolean>(false);

  const images: Image[] = [
    { id: "_01", src: "/images/ui.jpg" },
    { id: "_02", src: "/images/brand_identity.jpg" },
    { id: "_03", src: "/images/layout.jpg" },
    { id: "_04", src: "/images/midjourney.jpg" },
    { id: "_05", src: "/images/typo.jpg" },
    { id: "_06", src: "/images/project-2.jpg" },
  ];

  useEffect(() => {
    setIsStarted(true);
    setTimeout(() => setShowSatellites(true), 4400);
    setTimeout(() => setStartImageToggle(true), 13000);

    let interval: NodeJS.Timeout;
    if (startImageToggle) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [startImageToggle]);

  return (
    <div className="header_image_wrapper absolute inset-0 flex flex-col justify-center items-center w-full h-screen z-10">
      <div className="circle_image_block relative rounded-full perspective-2000">
        {/* Main Circle */}
        <div
          className={`circle_item _01 absolute  rounded-full perspective-1000 ${
            isStarted ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: isStarted
              ? "rotate(0deg)"
              : "translateY(150vh) rotate3d(0,1,0,360deg)",
            zIndex: 10,
            transition: "all 1.4s cubic-bezier(0.33, 1, 0.68, 1)",
            display: isStarted ? "block" : "none",
            animation: isStarted
              ? "mainCircle 13s cubic-bezier(0.33, 1, 0.68, 1) forwards"
              : "none",
          }}
        >
          <div className="circle_image_wrapper absolute  perspective-600 -inset-full">
            <div className="circle_image_item _01 relative w-full h-full">
              <div className="image_toggle_block absolute w-full h-full z-20">
                {startImageToggle &&
                  images.map((image, index) => (
                    <img
                      key={image.id}
                      className={`alternative_image ${
                        image.id
                      } absolute w-full h-full object-cover ${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                      src={image.src}
                      alt=""
                    />
                  ))}
              </div>
              <img
                className="circle_image w-full h-full object-cover"
                src="/images/ui.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Satellite Circles */}
        {[2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className={`circle_item _0${num} absolute rounded-full perspective-1000 transition-all duration-1000 
              ${showSatellites ? "opacity-100" : "opacity-0"}`}
            style={{
              zIndex: 1,
              display: showSatellites ? "block" : "none",
              transformOrigin: "center center",
              animation: showSatellites
                ? `satelliteAndRotate${num} 8.6s cubic-bezier(0.33, 1, 0.68, 1) forwards`
                : "none",
            }}
          >
            <div className="circle_image_wrapper absolute  perspective-600 -inset-full">
              <div className={`circle_image_item _0${num} w-full h-full`}>
                <img
                  className="circle_image w-full h-full object-cover"
                  src={images[num - 1].src}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes mainCircle {
          0% {
            opacity: 0;
            transform: translateY(0) rotate3d(0, 1, 0, 360deg);
          }
          10% {
            opacity: 0;
            transform: translateY(150vh) rotate3d(0, 1, 0, 180deg) scale(1);
          }
          23% {
            opacity: 1;
            transform: translateY(0) rotate3d(0, 1, 0, 360deg);
          }
          26.1% {
            transform: translateY(0) rotate3d(0, 1, 0, 360deg);
          }
          34.4%,
          50% {
            transform: rotate(0deg);
          }
          88% {
            transform: rotate(-180deg);
          }
          90% {
            transform: rotate3d(1, 1, 0, -90deg) translateY(110%) scale(1);
          }
          100% {
            transform: rotate3d(0, 1, 0, 180deg) translateY(120%) scale(1.25);
          }
        }

        @keyframes satelliteAndRotate2 {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          1% {
            opacity: 1;
          }
          30% {
            transform: rotateZ(-60deg);
            opacity: 1;
          }
          70% {
            transform: rotateZ(-180deg) translateY(0);
            opacity: 1;
          }
          80.05% {
            transform: rotateZ(-180deg) translateY(0);
            opacity: 0;
          }
          100% {
            transform: rotateZ(-180deg) translateY(0);
            opacity: 0;
          }
        }

        @keyframes satelliteAndRotate3 {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          32% {
            transform: rotateZ(-120deg);
            opacity: 1;
          }
          70% {
            transform: rotateZ(-180deg) translateY(0);
            opacity: 1;
          }
          80.05% {
            transform: rotateZ(-180deg) translateY(0);
            opacity: 0;
          }
          100% {
            transform: rotateZ(-180deg) translateY(0);
            opacity: 0;
          }
        }

        @keyframes satelliteAndRotate4 {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          34% {
            transform: rotateZ(180deg);
            opacity: 1;
          }
          70% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 1;
          }
          80.05% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 0;
          }
          100% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 0;
          }
        }

        @keyframes satelliteAndRotate5 {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          32% {
            transform: rotateZ(120deg);
            opacity: 1;
          }
          70% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 1;
          }
          80.05% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 0;
          }
          100% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 0;
          }
        }

        @keyframes satelliteAndRotate6 {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          1% {
            opacity: 1;
          }
          34% {
            transform: rotateZ(60deg);
            opacity: 1;
          }
          80% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 1;
          }
          80.05% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 0;
          }
          100% {
            transform: rotateZ(180deg) translateY(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderImage;
