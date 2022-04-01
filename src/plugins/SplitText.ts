export default class SplitText {
  private element: Element;
  public chars: Element[];
  public words: Element[];
  public childTextElements: Element[] = [];

  constructor(element: Element) {
    this.element = element;

    this.childTextElements = this.findChildTextElements(element);

    this.words = this.splitWords(this.childTextElements);

    this.chars = this.splitChars(this.words);
  }

  private splitChars(words: Element[]) {
    const chars: Element[] = [];

    for (const word of words) {
      word.innerHTML = word.textContent
        ? word.textContent
            .replace(/\s/g, "<span class='space'>$&</span>")
            .replace(/\S/g, "<span class='letter'>$&</span>")
        : "";

      chars.push(...(word.childNodes as unknown as Element[]));
    }

    return chars;
  }

  private splitWords(childTextElements: Element[]) {
    const words: Element[] = [];

    for (const childTextElement of childTextElements) {
      childTextElement.innerHTML = childTextElement.textContent
        ? childTextElement.textContent.replace(
            /\S+/g,
            "<span class='word'>$&</span>"
          )
        : "";

      words.push(...(childTextElement.childNodes as unknown as Element[]));
    }

    return words.filter((w) => w.textContent !== " ");
  }

  private findChildTextElements(
    element: Element,
    foundElements: Element[] = []
  ): Element[] {
    const textElements = [
      "[object HTMLHeadingElement]",
      "[object HTMLParagraphElement]",
      "[object HTMLSpanElement]",
      "[object HTMLAnchorElement]",
      "[object HTMLLIElement]",
      "[object HTMLHeadingElement]",
      "[object HTMLTableCellElement]",
    ];

    for (const el of element.childNodes) {
      if (textElements.includes(el.toString())) {
        foundElements.push(el as Element);
      } else {
        if (el.childNodes) {
          this.findChildTextElements(el as Element, foundElements);
        }
      }
    }

    return foundElements;
  }
}
