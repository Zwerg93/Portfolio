
    import { html, render } from "lit-html";
    import style from './style.css'
    import "../selina-component"
    
    const template = html`
        <div class="jacqui">
          <h1> Hi Jacqui</h1>
            <selina-component></selina-component>
            
        </div>
    `;
    
    class Jacqui extends HTMLElement {
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
    customElements.define("jacqui-component", Jacqui);
    