import React from "react";

const VideoSection = () => {
  return (
    <section className="flex justify-center pt-32 pl-64 pr-64 ">
      <video autoPlay muted loop className="rounded-xl">
        <source src="./images/level-up-video.mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
