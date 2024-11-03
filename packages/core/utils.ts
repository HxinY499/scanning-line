export function getDom(domOrSelector: HTMLElement | string) {
  if (typeof domOrSelector === "string") {
    return document.querySelector(domOrSelector) as HTMLElement | null;
  }
  return domOrSelector;
}

type PartialStyle = Omit<
  Partial<ReturnType<typeof getComputedStyle>>,
  "parentRule" | "length"
>;
export function setDomStyle(
  domOrSelector: HTMLElement | string,
  style: PartialStyle,
  check = false
) {
  const dom = getDom(domOrSelector);
  if (!dom) {
    console.error("Invalid DOM element provided");
    return;
  }

  const styleKeys = Object.keys(style) as Array<keyof PartialStyle>;

  if (check) {
    const computedStyle = getComputedStyle(dom);
    styleKeys.forEach(key => {
      const newValue = style[key];
      if (computedStyle[key] !== newValue) {
        dom.style[key] = newValue as any;
      }
    });
  } else {
    styleKeys.forEach(key => {
      dom.style[key] = style[key] as any;
    });
  }
}
