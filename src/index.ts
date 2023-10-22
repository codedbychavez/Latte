export default class extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div>hello</div>`;
    }

    init() {
        console.log('init')
    }
}