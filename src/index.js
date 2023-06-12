// main JS file that initiates this App/page JS modules

let http = new XMLHttpRequest();

http.open('get', './mocks/list.json', true);
http.send();

http.onload = function () {
  if (this.readyState == 4  && this.status == 200 ) {
    let products = JSON.parse(this.responseText);

    let output = "";

    for(let item of products) {
      output += `
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

    document.querySelector(".products").innerHTML = output;
  }
}