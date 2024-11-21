
    import { html, render } from "lit-html";
    import "./style.scss";
    
    const template = html`
        <style>
            @import "./style.scss";
        </style>
        <div class="Chen2">
            <!-- Content -->
        </div>
    `;
    
    class Chen2 extends HTMLElement {
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
    customElements.define("Chen2-component", Chen2);
    