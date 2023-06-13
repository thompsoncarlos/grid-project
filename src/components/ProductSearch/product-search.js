class ProductSearch extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement('link')
    linkElem.setAttribute('rel', 'stylesheet')
    linkElem.setAttribute('href', 'components/ProductSearch/product-search.css')

    const template = document.createElement("template")
    template.innerHTML = `
      <section class="product-search__container">
        <h1 class="product-search__title">Cars In Stock</h1>
        <input
          class="product-search__input-search"
          type="text"
          placeholder="Type to Filter..."
        />
      </section>
    `
    shadowDOM.appendChild(linkElem)
    shadowDOM.append(template.content.cloneNode(true))
  }
}

  customElements.define('mb-product-search', ProductSearch);