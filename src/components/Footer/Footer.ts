import FooterHTML from "./Footer.html";

import { componentSetup } from "../../utils/ComponentSetup";

export class Footer extends HTMLElement {
  constructor() {
    super();
    this.init();
  }
  
  async init() {
    const template = await componentSetup.fetchTemplate(FooterHTML);
    this.innerHTML = template;
  }
}
