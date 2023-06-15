class SmallerWidth extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement('link')
    linkElem.setAttribute('rel', 'stylesheet')
    linkElem.setAttribute('href', './styles.css')

    const template = document.createElement("template")
    template.innerHTML = `
      <section class="mb-smaller-width" hidden=true>
        <p>I look much better in a wide window ;)</p>
      </section>
    `
    shadowDOM.appendChild(linkElem)
    shadowDOM.append(template.content.cloneNode(true))
  }
}

  customElements.define('mb-smaller-width', SmallerWidth);