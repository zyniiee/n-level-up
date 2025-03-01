"use client";
import React from "react";

const TextScroll = () => {
  const textSnippet = (
    <p className="mx-4 text-xl inline-block">
      <span className="uppercase font-bold">Level up </span>- Art & Design
      Courses
    </p>
  );

  return (
    <div className="w-full pt-32" style={{ maxWidth: "none" }}>
      <section
        className="relative w-full overflow-hidden pt-32"
        id="AboutSection"
        style={{ maxWidth: "100vw", margin: "0", padding: "2rem 0" }}
      >
        {/* TOP LINE: Left to Right */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div className="relative w-[200%] animate-marquee-reverse">
            {Array(16)
              .fill(null)
              .map((_, i) => (
                <React.Fragment key={`top-${i}`}>{textSnippet}</React.Fragment>
              ))}
          </div>
        </div>

        {/* BOTTOM LINE: Right to Left */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div className="relative w-[200%] animate-marquee">
            {Array(16)
              .fill(null)
              .map((_, i) => (
                <React.Fragment key={`bottom-${i}`}>
                  {textSnippet}
                </React.Fragment>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextScroll;
