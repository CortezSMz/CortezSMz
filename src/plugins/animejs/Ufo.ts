import anime from "animejs";

function suckText(element: Element): void {
  element.innerHTML = element.textContent
    ? element.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
    : "";

  anime
    .timeline({ loop: false })
    .add({
      targets: [element, Array.from(element.children)],
      translateY: [0, -500],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i * -1,
    })
    .add({
      targets: [element, Array.from(element.children)],
      opacity: [0, 1],
      translateY: [0, 0],
    });
}

function suckImage(element: Element): void {
  anime
    .timeline({ loop: false })
    .add({
      targets: element,
      translateY: [0, -10500],
      opacity: [1, 1],
      easing: "easeInExpo",
      duration: 1200,
    })
    .add({
      targets: element,
      opacity: [0, 1],
      translateY: [0, 0],
    });
}

export { suckText, suckImage };
