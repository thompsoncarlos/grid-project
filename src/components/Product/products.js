class Products extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement('link')
    linkElem.setAttribute('rel', 'stylesheet')
    linkElem.setAttribute('href', './styles.css')

    let template = document.createElement("template")
    let http = new XMLHttpRequest();

    http.open('get', '/mocks/list.json', true);
    http.send();

    http.onload = function () {
      if (this.readyState == 4  && this.status == 200 ) {
        let products = JSON.parse(this.responseText);
        console.log(products)

        for(let item of products) {
          template += `
            <article class="product">
              <h2 class="product-header">${item.name}</h2>
              <img class="product-image" src="${item.imagePath}" alt="">
              <div class="product-container">
                <p class="product-price">${item.priceFormatted}</p>
                <button class="product-button">Add to Shopping Bag</button>
              </div>
            </article>
          `
        }
        
        // products.forEach( item => {
        //   template.innerHTML = `
        //   <article class="product">
        //       <h2 class="product-header">${item.name}</h2>
        //       <img class="product-image" src="${item.imagePath}" alt="">
        //       <div class="product-container">
        //         <p class="product-price">${item.priceFormatted}</p>
        //         <button class="product-button">Add to Shopping Bag</button>
        //       </div>
        //     </article>
        //   `
        // })

        document.querySelector(".products").innerHTML = template;
      }
    }

    shadowDOM.appendChild(linkElem)
    shadowDOM.append(template.content.cloneNode(true))
  }
}

  customElements.define('mb-products', Products);
