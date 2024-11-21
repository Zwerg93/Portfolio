import {html, render} from "lit-html";
import style from './style.css'

const template = html`
    <div class="testcss">
        <p>Test :)</p>
        <p>scss </p>
    </div>
`;

class Testcss extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Dynamisches Style-Tag erstellen
        const styleTag = document.createElement('style');
        styleTag.textContent = style; // Hier wird der CSS-Inhalt eingefügt

        // Style und Template in den Shadow DOM einfügen
        this.shadowRoot.appendChild(styleTag);
        render(template, this.shadowRoot);
    }
}

customElements.define("testcss-component", Testcss);
