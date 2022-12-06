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

    const scrollEl = document.querySelector("#main-container");
    locoScroll.current = new locomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      repeat: true,
    });

    gsap.registerPlugin(ScrollTrigger);

    locoScroll.current.on("scroll", ScrollTrigger.update);

    ScrollTrigger.create({
      trigger: ".header-bg",
      scroller: ".container",
      start: "top+=30% 50%",
      end: "bottom-=40% 50%",
      animation: gsap.to(".header-bg", { backgroundSize: "120%" }),
      scrub: 2,
      // markers: true
    });
  }, [start]);

  useEffect(() => {
    console.log(!!locoScroll.current, location);

    window.scrollTo(0, 0);
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
