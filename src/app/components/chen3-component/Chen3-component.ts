
    import { html, render   } from "lit-html";
    import "./style.scss";
    
    const template = html`
        <style>

        </style>
        <div class="Chen3">
            <p>Ich liebe Chen</p>
        </div>
    `;
    
    class chen3 extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
        }
        connectedCallback() {
            this.render();
        }
        private render() {
            render(template, this.shadowRoot);
        }
    }
    customElements.define("chen3-component", chen3);
    