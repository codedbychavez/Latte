import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export const components = [
  {
    component: Navbar,
    name: "app-navbar",
  },
  {
    component: Footer,
    name: "app-footer",
  },
];

export function initComponents() {
  components.forEach((component) => {
    customElements.define(component.name, component.component);
    // const newComponent = new component.component();
    // newComponent.init();
  });
}
