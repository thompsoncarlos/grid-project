class Products extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement('link')
    linkElem.setAttribute('rel', 'stylesheet')
    linkElem.setAttribute('href', './styles.css')

    const template = document.createElement("template")
    template.innerHTML = `

      <section class="products-content">
        <div class="products">
          <article class="product">
            <h2 class="product-header">A200</h2>
            <img class="product-image" src="./assets/carImages/aclasswhite.jpg" alt="">
            <div class="product-container">
              <p class="product-price">29.500,50 €</p>
              <button class="product-button"></button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A 200 Auto</h2>
            <img class="product-image" src="./assets/carImages/aclasssilver.jpg" alt="">
            <div class="product-container">
              <p class="product-price">31.900,50 €</p>
              <button class="product-button" onclick="addtoQuantity(1)">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A 250 Auto</h2>
            <img class="product-image" src="./assets/carImages/aclassred.jpg"alt="">
            <div class="product-container">
              <p class="product-price">45.400,10 €</p>
              <button class="product-button" onclick="addtoQuantity(2)">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A 180 d</h2>
            <img class="product-image" src="./assets/carImages/aclassred.jpg" alt="">
            <div class="product-container">
              <p class="product-price">29.500,00 €</p>
              <button class="product-button" onclick="addtoQuantity(3)">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A 200 d Auto</h2>
            <img class="product-image" src="./assets/carImages/aclasssilver.jpg" alt="">
            <div class="product-container">
              <p class="product-price">38.350,00 €</p>
              <button class="product-button" onclick="addtoQuantity(4)">Add to Shopping Bag</button>
            </div>
          </article>

          <article class="product">
            <h2 class="product-header">A 220 d Auto</h2>
            <img class="product-image" src="./assets/carImages/aclasswhite.jpg" alt="">
            <div class="product-container">
              <p class="product-price">43.800,70 €</p>
              <button class="product-button" onclick="addtoQuantity(5)">Add to Shopping Bag</button>
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
