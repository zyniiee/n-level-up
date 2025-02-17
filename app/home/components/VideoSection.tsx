import React from "react";

const VideoSection = () => {
  return (
    <section className="section_container flex justify-center pt-32 xl:px-[20vw] px-16 ">
      <video autoPlay muted loop className="rounded-xl">
        <source src="./images/level-up-video.mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
