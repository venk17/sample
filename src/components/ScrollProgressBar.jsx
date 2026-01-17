import { useEffect, useState } from "react";

const ScrollProgressBar = ({ headerRef }) => {
  const [scroll, setScroll] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  // calculate header height
  useEffect(() => {
    const updateOffset = () => {
      if (headerRef?.current) {
        setTopOffset(headerRef.current.offsetHeight);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [headerRef]);

  // scroll progress
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
      className="fixed left-0 w-full h-[3px] z-[40]"
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
