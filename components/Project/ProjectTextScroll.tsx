import React, { useEffect, useRef } from "react";

const ProjectTextScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Text content
  const textSnippet = (
    <span className="mx-4 text-2xl inline-block">
      <span className="uppercase font-bold">Level up </span>- Art & Design
      Courses
    </span>
  );

  useEffect(() => {
    if (!scrollRef.current || !contentRef.current) return;

    // Get the width of the content
    const scrollContainer = scrollRef.current;
    const contentWidth = contentRef.current.offsetWidth;
    const viewportWidth = scrollContainer.offsetWidth;

    // Make sure we have enough copies to create seamless scrolling
    let currentScroll = 0;

    // Animation function
    const animate = () => {
      if (!scrollContainer) return;

      // Reset position when we've scrolled one full content width
      if (currentScroll >= contentWidth / 2) {
        currentScroll = 0;
        scrollContainer.style.transform = `translateX(0)`;
      }

      // Increase scroll position - much higher value for very fast scrolling
      currentScroll += 2;
      scrollContainer.style.transform = `translateX(-${currentScroll}px)`;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Create enough copies to fill the container twice (for seamless loop)
  const renderText = () => {
    const copies = [];
    for (let i = 0; i < 20; i++) {
      copies.push(
        <React.Fragment key={`text-${i}`}>{textSnippet}</React.Fragment>
      );
    }
    return copies;
  };

  return (
    <div className="relative w-full ">
      <div
        ref={scrollRef}
        className="inline-block whitespace-nowrap will-change-transform"
        style={{ transform: "translateX(0)" }}
      >
        <div ref={contentRef} className="inline-block">
          {renderText()}
        </div>
      </div>
    </div>
  );
};

export default ProjectTextScroll;
