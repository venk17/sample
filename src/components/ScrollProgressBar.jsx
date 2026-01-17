import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

const ScrollProgressBar = ({ headerRef }) => {
  const [scroll, setScroll] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const location = useLocation(); // 👈 detect route change

  // Calculate header height
  const updateOffset = useCallback(() => {
    requestAnimationFrame(() => {
      if (headerRef?.current) {
        setTopOffset(headerRef.current.offsetHeight);
      }
    });
  }, [headerRef]);

  // Observe header size changes
  useEffect(() => {
    updateOffset();

    window.addEventListener("resize", updateOffset);

    const observer = new MutationObserver(updateOffset);

    if (headerRef?.current) {
      observer.observe(headerRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => {
      window.removeEventListener("resize", updateOffset);
      observer.disconnect();
    };
  }, [headerRef, updateOffset]);

  // Scroll progress listener
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = height > 0 ? (scrolled / height) * 100 : 0;
      setScroll(percent);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ RESET on page change
  useEffect(() => {
    setScroll(0);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className="fixed left-0 w-full h-[3px] z-[40]"
      style={{ top: `${topOffset}px` }}
    >
      <div
        className="h-full bg-blue-600 transition-[width] duration-150"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
