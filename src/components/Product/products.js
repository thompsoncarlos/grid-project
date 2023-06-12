const template = document.createElement("template")
template.innerHTML = `
  <style>
    .products-content {
      margin: 40px auto;
      width: 918px;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      row-gap: 40px;
    }

    .product {
      display: grid;
      grid-template-rows: max-content 1fr;
    }


    .product-header{
      font-size: 22px;
      color: var(--text-color-main);
      font-weight: lighter;
      margin-bottom: 15px;
    }

    .product-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      /* Todo: Cover height  */
    }

    .product-container {
      /* Todo: Check if var color identity can be better */
      border-left: 1px solid var(--text-color-second);
      border-right: 1px solid var(--text-color-second);
    }

    .product-price {
      font-size: 20px;
      color: var(--text-color-main);
      padding: 10px 15px;
    }

    .product-button{
      font-size: 16px;
      width: 100%;
      background-color: var(--bg-button);
      color: var(--bg-product-add);
      border: none;
      padding: 5px 31px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
    }
  </style>

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
        <p class="product-price">0.00 €</p>
        <button class="product-button">Add to Shopping Bag</button>
      </article>

      <article class="product">
        <h2 class="product-header">A200</h2>
        <img class="product-image" src="./assets/carImages/aclassred.jpg" alt="">
        <p class="product-price">0.00 €</p>
        <button class="product-button">Add to Shopping Bag</button>
      </article>

      <article class="product">
        <h2 class="product-header">A200</h2>
        <img class="product-image" src="./assets/carImages/aclassred.jpg" alt="">
        <p class="product-price">0.00 €</p>
        <button class="product-button">Add to Shopping Bag</button>
      </article>

      <article class="product">
        <h2 class="product-header">A200</h2>
        <img class="product-image" src="./assets/carImages/aclasssilver.jpg" alt="">
        <p class="product-price">0.00 €</p>
        <button class="product-button">Add to Shopping Bag</button>
      </article>

      <article class="product">
        <h2 class="product-header">A200</h2>
        <img class="product-image" src="./assets/carImages/aclasswhite.jpg" alt="">
        <p class="product-price">0.00 €</p>
        <button class="product-button">Add to Shopping Bag</button>
      </article>
    </div>
  </section>

`
class Products extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });
    shadowDOM.append(template.content.cloneNode(true))
  }
}

  customElements.define('mb-products', Products);
