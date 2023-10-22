import { initComponents } from "./ComponentsEntry";

export class App extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div>hello</div>`;
  }

  init() {
    initComponents();
  }
}

customElements.define("my-app", App);

const app = new App();
app.init();

const idDiv = document.getElementById("app");
if (idDiv) {
  idDiv.appendChild(app);
}
