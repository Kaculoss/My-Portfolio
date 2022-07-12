import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const ScrollToBottom = () => {
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  const toggleBottomVisibility = () => {
    if (window.pageYOffset < 500) {
      setIsBottomVisible(true);
    } else {
      setIsBottomVisible(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBottomVisibility);

    return () => {
      window.removeEventListener("scroll", toggleBottomVisibility);
    };
  }, []);

  return (
    <div
      className={classNames(
        isBottomVisible ? "visible-scroll" : "non-visible-scroll"
      )}
      onClick={scrollToBottom}
    >
      <FaArrowDown size={"2rem"} />
    </div>
  );
};

export const ScrollToTop = () => {
  const [isTopVisible, setIsTopVisible] = useState(false);

  const toggleTopVisibility = () => {
    if (window.pageYOffset > 1500) {
      setIsTopVisible(true);
    } else {
      setIsTopVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleTopVisibility);

    return () => {
      window.removeEventListener("scroll", toggleTopVisibility);
    };
  }, []);

  return (
    <div
      className={classNames(
        isTopVisible ? "visible-scroll" : "non-visible-scroll"
      )}
      onClick={scrollToTop}
    >
      <FaArrowUp size={"2rem"} />
    </div>
  );
};
