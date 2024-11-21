
    import { html, render } from "lit-html";
    import style from './style.css'
    import "../posts-component"
    
    const template = html`
        <div class="selina">
       <h1>Hallo Selina</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nesciunt? </p>
        <posts-component></posts-component>
    `;
    
    class Selina extends HTMLElement {
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
    customElements.define("selina-component", Selina);
    