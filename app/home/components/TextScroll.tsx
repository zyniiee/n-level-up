"use client";
import React from "react";

const TextScroll = () => {
  // Reusable text snippet
  const textSnippet = (
    <p className="mx-4 text-xl text-[#AEAEAE] inline-block">
      <span className="uppercase font-bold">Level up </span>- Art & Design
      Courses
    </p>
  );

  return (
    <section className="relative w-full overflow-hidden pt-32">
      {/* TOP LINE: Left to Right */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="relative w-[200%] animate-marquee-reverse">
          {/* 1st copy */}
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <React.Fragment key={`firstTop-${i}`}>
                {textSnippet}
              </React.Fragment>
            ))}
          {/* 2nd copy for seamless looping */}
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <React.Fragment key={`secondTop-${i}`}>
                {textSnippet}
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* BOTTOM LINE: Right to Left */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="relative w-[200%] animate-marquee">
          {/* 1st copy */}
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <React.Fragment key={`firstBottom-${i}`}>
                {textSnippet}
              </React.Fragment>
            ))}
          {/* 2nd copy */}
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <React.Fragment key={`secondBottom-${i}`}>
                {textSnippet}
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TextScroll;
