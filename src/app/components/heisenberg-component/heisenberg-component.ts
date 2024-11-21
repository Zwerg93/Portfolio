
    import { html, render } from "lit-html";
    import style from './style.css'
    
    const template = html`
        <div class="heisenberg">
            <!-- Content -->
            <p>Heisenberg :)</p>
        </div>
    `;
    
    class Heisenberg extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
        }
        connectedCallback() {
            this.render();
        }
        private render() {
            const styleTag = document.createElement('style');
            styleTag.textContent = style; // Hier wird der CSS-Inhalt eingefügt
            this.shadowRoot.appendChild(styleTag);
            
            render(template, this.shadowRoot);
        }
    }
    customElements.define("heisenberg-component", Heisenberg);
    