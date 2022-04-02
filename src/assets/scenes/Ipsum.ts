import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import SplitText from "@/plugins/SplitText";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function startScene(this: Vue): gsap.core.Timeline {
  const { text, main } = this.$refs;

  const splitText = new SplitText(text as Element);

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: (main as Element).parentNode as Element,
        start: "+=5% center",
        end: "90% center",
        scrub: true,
      },
    })
    .from(splitText.chars, {
      transformOrigin: "500% -100%",
      scale: 0,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "power3.easeInOut",
    })
    .to(splitText.chars, {
      transformOrigin: "5000% -100%",
      scale: 10,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "power3.easeInOut",
    });
}
