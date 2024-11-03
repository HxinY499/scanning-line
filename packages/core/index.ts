import { getDom, setDomStyle } from "./utils";

export default class ScanningLine {
  constructor(domOrSelector: HTMLElement | string) {
    const dom = getDom(domOrSelector);
    if (!dom) {
      throw new Error("请输入正确的dom");
    }
    setDomStyle(dom, { position: "relative" }, true);
    this.createScanLine();
  }

  createScanLine() {
    const scanlineDom = document.createElement("div");
    setDomStyle(scanlineDom, { position: "absolute" });
  }

  start() {}

  pause() {}
}
