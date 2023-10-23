import NavbarHTML from "./Navbar.html";
import { componentSetup } from "../../utils/ComponentSetup";

export class Navbar extends HTMLElement {
  constructor() {
    super();
    this.init();
  }
  
  async init() {
    const template = await componentSetup.fetchTemplate(NavbarHTML);
    this.innerHTML = template;

    this.setClickEvent();
  }

  setClickEvent() {
    const button = document.getElementById("button");
    if (button) {
      button.addEventListener("click", () => {
        console.log("click");
      });
    }
  }
}
