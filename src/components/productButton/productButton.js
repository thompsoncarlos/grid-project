class Button extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement('link')
    linkElem.setAttribute('rel', 'stylesheet')
    linkElem.setAttribute('href', './styles.css')

    let button = document.getElementById('product-container');

    button.addEventListener('click', function() {
      let product = document.querySelector('.product')
      product.classList.toggle('active')


      if (product.classList.contains('active')) {
        return button.textContent = "Remove from Shoppping Bag"
      }

      button.textContent = "Add to Shopping Bag"
    })

    const template = document.createElement("template");
    template.innerHTML = `
      <button></button>
    `;
    shadowDOM.appendChild(linkElem)
    shadowDOM.append(template.content.cloneNode(true));
  }
}

customElements.define("mb-button", Button);
