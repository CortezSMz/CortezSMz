/* eslint-disable @typescript-eslint/no-unused-vars */
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export function animateUfo(ufo: Element): void {
  const [beam, ship, cat, beamGradient] = ufo.childNodes;

  /* Ship animations */
  const [borders, decals] = ship.childNodes;

  const [borderPath] = borders.childNodes;

  gsap.to(decals.childNodes, {
    motionPath: {
      path: borderPath as unknown as string,
      align: borderPath as SVGElement,
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    duration: 4,
    ease: "linear",
    stagger: { amount: 3.6, repeat: -1 },
  });

  /* Beam animations */
  gsap.to(beamGradient.childNodes, {
    repeat: -1,
    ease: "linear",
    attr: {
      offset: "-=0.05",
    },
  });

  /* Cat  animations */
  const [antenna, body, tail, head, pupil, iris] = cat.childNodes;
  /* Antenna and tail wiggle */
  /* gsap.fromTo(
    antenna,
    {
      rotate: -10,
      transformOrigin: "0% 100%",
      repeat: -1,
      duration: 3,
      ease: "linear",
    },
    {
      rotate: 10,
      transformOrigin: "0% 100%",
      repeat: -1,
      duration: 3,
      ease: "linear",
    }
  ); */
}
