class Products extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement('link')
    linkElem.setAttribute('rel', 'stylesheet')
    linkElem.setAttribute('href', './styles.css')
    // linkElem.setAttribute('href', 'components/Product/products.scss')

    const template = document.createElement("template")
    template.innerHTML = `

      <section class="products-content">
        <div class="products">
          <article class="product">
            <h2 class="product-header">A200</h2>
            <img class="product-image" src="./assets/carImages/aclasswhite.jpg" alt="">
            <div class="product-container">
              <p class="product-price">29.500,00 €</p>
              <button class="product-button">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A200</h2>
            <img class="product-image" src="./assets/carImages/aclasssilver.jpg" alt="">
            <div class="product-container">
              <p class="product-price">29.500,00 €</p>
              <button class="product-button">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A200</h2>
            <img class="product-image" src="./assets/carImages/aclassred.jpg" alt="">
            <div class="product-container">
              <p class="product-price">29.500,00 €</p>
              <button class="product-button">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A200</h2>
            <img class="product-image" src="./assets/carImages/aclassred.jpg" alt="">
            <div class="product-container">
              <p class="product-price">29.500,00 €</p>
              <button class="product-button">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A200</h2>
            <img class="product-image" src="./assets/carImages/aclasssilver.jpg" alt="">
            <div class="product-container">
              <p class="product-price">29.500,00 €</p>
              <button class="product-button">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A200</h2>
            <img class="product-image" src="./assets/carImages/aclasswhite.jpg" alt="">
            <div class="product-container">
              <p class="product-price">29.500,00 €</p>
              <button class="product-button">Add to Shopping Bag</button>
            </div>
          </article>
        </div>
      </section>
    `
    shadowDOM.appendChild(linkElem)
    shadowDOM.append(template.content.cloneNode(true))
  }
}

  customElements.define('mb-products', Products);
