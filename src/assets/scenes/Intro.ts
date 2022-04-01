import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import SplitText from "@/plugins/SplitText";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function startScene(this: Vue): void {
  const { ufo, main, text } = this.$refs;

  const splitText = new SplitText(text as Element);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: (main as Element).parentNode as Element,
        start: "+=20% center",
        end: "95% center",
        scrub: true,
      },
    })
    .from(splitText.chars, {
      transformOrigin: "500% -100%",
      scale: 0,
      duration: 3,
      delay: gsap.utils.random(0, 3),
      stagger: {
        each: 0.5,
        from: "random",
      },
    })
    .fromTo(
      (ufo as Vue).$el,
      {
        duration: 20,
        y: (window.innerHeight / 1.5) * -1,
        x: window.innerWidth / 2,
        scale: 0,
        opacity: 0,
      },
      {
        duration: 20,
        y: (window.innerHeight / 4) * -1,
        x: (text as HTMLElement).offsetWidth / 2,
        scale: 1,
        opacity: 1,
      }
    )
    .to(
      Array.from((ufo as Vue).$el.childNodes).slice(0, 1),
      {
        attr: { points: "-150.2,450 -94,220 -57.2,220 0.3,450" },
      },
      "-=30"
    )
    .to(
      splitText.chars,
      {
        x: (i, char) => {
          return (
            "+=" +
            MotionPathPlugin.getRelativePosition(
              char,
              (ufo as Vue).$el,
              [0.5, 0.5],
              [0.5, 0.25]
            ).x
          );
        },
        y: (i, char) => {
          return (
            "+=" +
            MotionPathPlugin.getRelativePosition(
              char,
              (ufo as Vue).$el,
              [0.5, 0.5],
              [0.5, 0.25]
            ).y
          );
        },
        stagger: {
          each: 0.5,
          from: "random",
        },
        ease: "easeInOut",
        duration: 100,
        scale: 0,
        opacity: 0,
      },
      "+=40"
    )
    .to(
      (ufo as Vue).$el,
      {
        y: (window.innerHeight * -1) / 2,
        scale: 0,
        duration: 15,
      },
      "-=40"
    );
}
