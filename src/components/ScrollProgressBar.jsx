import { useEffect, useState, useCallback } from "react";

const ScrollProgressBar = ({ headerRef }) => {
  const [scroll, setScroll] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  // Calculate header height with requestAnimationFrame for smooth updates
  const updateOffset = useCallback(() => {
    requestAnimationFrame(() => {
      if (headerRef?.current) {
        setTopOffset(headerRef.current.offsetHeight);
      }
    });
  }, [headerRef]);

  // Initial calculation and observe changes
  useEffect(() => {
    updateOffset();
    
    // Listen for resize events
    window.addEventListener("resize", updateOffset);
    
    // Create a MutationObserver to watch for DOM changes in the header
    const observer = new MutationObserver(updateOffset);
    
    if (headerRef?.current) {
      observer.observe(headerRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      });
    }
    
    return () => {
      window.removeEventListener("resize", updateOffset);
      observer.disconnect();
    };
  }, [headerRef, updateOffset]);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScroll((scrolled / height) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 w-full h-[3px] z-[40] transition-top duration-300 ease-in-out"
      style={{ top: `${topOffset}px` }}
    >
      <div
        className="h-full bg-blue-600 transition-[width] duration-75"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;