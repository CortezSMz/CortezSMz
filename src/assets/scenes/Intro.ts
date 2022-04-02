import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import SplitText from "@/plugins/SplitText";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function startScene(this: Vue): void {
  const { text } = this.$refs;

  const splitText = new SplitText(text as Element);

  gsap.timeline().add(intro(splitText)).add(conclusion.bind(this)(splitText));
}

function intro(splitText: SplitText): gsap.core.Timeline {
  return gsap.timeline().from(splitText.chars, {
    transformOrigin: "500% -100%",
    scale: 0,
    duration: 2,
    delay: gsap.utils.random(1, 3),
    stagger: {
      each: 0.05,
      from: "random",
    },
    ease: "power3.easeInOut",
  });
}

function conclusion(this: Vue, splitText: SplitText): gsap.core.Timeline {
  const { ufo, main } = this.$refs;

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: (main as Element).parentNode as Element,
        start: "+=10% center",
        end: "95% center",
        scrub: true,
      },
    })
    .fromTo(
      (ufo as Vue).$el,
      {
        scale: 0,
        opacity: 0.5,
      },
      {
        duration: 20,
        motionPath: {
          path: "M 188.009 2.328 C 200.233 107.101 172.293 251.455 70.43 188.591 C -31.433 125.727 -19.112 273.174 96.624 241.56 C 222.352 207.217 437.718 235.739 4.074 359.721",
          offsetX:
            ((main as Element).parentNode as HTMLElement).offsetWidth / 4,
          offsetY:
            (((main as Element).parentNode as HTMLElement).offsetHeight / 6) *
            -1,
        },
        scale: 1,
        opacity: 1,
      }
    )
    .to(
      Array.from((ufo as Vue).$el.childNodes).slice(0, 1),
      {
        attr: { points: "-150.2,450 -94,220 -57.2,220 0.3,450" },
        duration: 5,
      },
      "-=10"
    )
    .to(this.$root.$data.isMobile() ? splitText.words : splitText.chars, {
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
        each: 1,
        from: "random",
      },
      ease: "easeInOut",
      duration: 100,
      scale: 0,
      opacity: 0.5,
    })
    .to(
      Array.from((ufo as Vue).$el.childNodes).slice(0, 1),
      {
        attr: { points: "-94.2,150 -94,220 -57.2,220 -57,150" },
        duration: 5,
      },
      "-=10"
    )
    .to([(ufo as Vue).$el], {
      motionPath: {
        path: "M 97.814 136.364 C 97.814 136.364 620.829 150.748 405.639 252.589 C 190.449 354.43 444.189 42.002 444.189 42.002",
        align: "self",
      },
      scale: 0,
      opacity: 0,
      duration: 10,
    });
}
