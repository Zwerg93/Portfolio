    import { html, render } from "lit-html";
    import style from './style.css'
    
    const template = html`
        <div class="walter">
            <h2>Say my name</h2>
            <h1>Heisenberg</h1>
        </div>
    `;
    
    class Walter extends HTMLElement {
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
    customElements.define("walter-component", Walter);
    