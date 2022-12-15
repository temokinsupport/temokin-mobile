import locomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { useLocation } from "react-router";

export default function useLocoScroll(start) {
  const location = useLocation();

  const locoScroll = useRef();

  useEffect(() => {
    if (!start) return;
  }, [start]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    if (!!locoScroll.current) {
    }
  }, [location]);

  useEffect(() => {
    return () => {
      if (
        location.pathname.includes("/building/") ||
        location.pathname.includes("/property-development/")
      ) {
        setTimeout(() => {
          if (!!locoScroll.current) {
            locoScroll.current.destroy();
          }
        });
      }
    };
  });
}
