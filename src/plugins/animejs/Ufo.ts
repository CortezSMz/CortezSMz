import anime from "animejs";

function animateUfo(ufo: Element): void {
  const [ship, et] = ufo.childNodes;

  /* Et animations */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_body, eye] = et.childNodes;
  const [iris, pupil] = eye.childNodes;

  /* eye blink */
  anime
    .timeline({ loop: true, direction: "alternate" })
    .add({
      targets: iris,
      baseFrequency: 0,
      scale: 1,
      easing: "easeInOutQuint",
      d: [
        {
          value:
            "M-204.1,314.9c1.1,0,1.9,0.9,1.9,1.9c0,1.1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.9-1.9-1.9 S-205.2,314.9-204.1,314.9z",
        },
        {
          value:
            "M-204.1,316.3c1.1,0,1.9,0.2,1.9,0.4c0,0.3-0.9,0.4-1.9,0.4c-1.1,0-1.9-0.2-1.9-0.4 S-205.2,316.3-204.1,316.3z",
        },
      ],
    })
    .add(
      {
        targets: pupil,
        baseFrequency: 0,
        easing: "easeInOutQuint",
        d: [
          {
            value:
              "M-204.1,316.1c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6s-0.6-0.3-0.6-0.6 S-204.4,316.1-204.1,316.1z",
          },
          {
            value:
              "M-204.1,316.6c0.4,0,0.6,0.1,0.6,0.1c0,0.1-0.3,0.1-0.6,0.1s-0.6-0.1-0.6-0.1 S-204.4,316.6-204.1,316.6z",
          },
        ],
      },
      0
    );

  /* eye movement */
  (function moveEye() {
    const x = anime.random(-0.3, 0.3),
      y = anime.random(-0.3, 0.3),
      delay = anime.random(1, 0);
    anime({
      targets: pupil,
      translateX: x * 2,
      translateY: y * 2,
      delay,
    });
    anime({
      targets: iris,
      translateX: x,
      translateY: y,
      delay,
      complete: moveEye,
    });
  })();

  /* Ship animations */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_beam, fuselage] = ship.childNodes;
  const [feets, inner] = fuselage.childNodes;

  /* Feets moving */
  const path = anime.path(inner as SVGElement);

  const amountOfFeets = 10;
  const duration = 2500;

  for (let i = 0; i < amountOfFeets; i++) {
    const feet = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    feet.setAttributeNS(null, "cx", "-255");
    feet.setAttributeNS(null, "cy", "297");
    feet.setAttributeNS(null, "r", "1");
    feet.setAttributeNS(null, "id", "feets");
    feets.appendChild(feet);

    setTimeout(() => {
      anime({
        loop: true,
        duration: duration,
        targets: feet,
        translateX: path("x"),
        translateY: path("y"),
        easing: "linear",
        endDelay: -1,
        delay: 0,
      });
    }, (duration / amountOfFeets) * i);
  }
}

function suckText(text: Element): void {
  text.innerHTML = text.textContent
    ? text.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
    : "";

  anime
    .timeline({ loop: false })
    .add({
      targets: [text, Array.from(text.children)],
      translateY: [0, -500],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i * -1,
    })
    .add({
      targets: [text, Array.from(text.children)],
      opacity: [0, 1],
      translateY: [0, 0],
    });
}

export { animateUfo, suckText };
