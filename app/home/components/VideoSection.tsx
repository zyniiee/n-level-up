import React from "react";

const VideoSection = () => {
  return (
    <section className="video_section section_container flex justify-center items-center overflow-hidden ">
      <video autoPlay muted loop className="rounded-xl">
        <source src="./images/level-up-video.mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
