/* eslint-disable @typescript-eslint/no-unused-vars */
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(Draggable, MotionPathPlugin);

function animateUfo(ufo: Element): void {
  Draggable.create(ufo);
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

function toUfo(ufo: Element, text: Element): void {
  text.innerHTML = text.textContent
    ? text.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
    : "";

  const ship = Array.from(ufo.childNodes).slice(1, 2)[0];

  let letters = text.childNodes as unknown as Element[];
  letters = Array.from(letters).reverse();

  gsap.timeline();
  for (let i = letters.length - 1; i >= 0; i--) {
    if (!(letters[i] instanceof Element)) continue;

    const p = MotionPathPlugin.getRelativePosition(
      letters[i],
      ship as Element,
      [0.5, 0.5],
      [0.5, 1.01]
    );

    gsap
      .timeline()
      .to(letters[i], {
        x: "+=" + p.x,
        y: "+=" + p.y,
        ease: "easeInOut",
        duration: 0.1 * i,
        scale: 0.2,
      })
      .to(letters[i], { opacity: 0 })
      .to(letters[i], {
        x: 0,
        y: 0,
        scale: 1,
      })
      .to(letters[i], {
        opacity: 1,
      });
  }
}

export { animateUfo, toUfo };
