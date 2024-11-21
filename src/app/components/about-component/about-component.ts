    import { LitElement, html, css, render } from 'lit';

    const template = html`

        <p>About</p>

        <h1>Marcel Pouget</h1>
    ` 
        class About extends HTMLElement {
            constructor() {
                super()
                this.attachShadow({mode: "open"})
            }
            connectedCallback() {
                this.render()
            }
            private render() {
                render(template, this.shadowRoot)
            }
        }
        customElements.define("about-component", About)
