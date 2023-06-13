class Header extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement('link')
    linkElem.setAttribute('rel', 'stylesheet')
    linkElem.setAttribute('href', 'components/Header/header.css')

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="mb-header__wrapper">
        <nav class="mb-header__top">
          <div class="mb-header__logo-and-wordmark">
            <div class="mb-header__logo-wrapper">
              <img src="./assets/mb-star.svg" class="mb-header__star" alt="Mercedes-Benz Logo" />
            </div>
            <div class="mb-header__wordmark-wrapper">
              <img class="mb-header__wordmark" src="./assets/mb-wordmark.svg" alt="Mercedes-Benz Logo Text">
            </div>
          </div>
          <div class="mb-header__top-menu-tools">
            <div data-name="price-input" class="mb-header__price">59.000,00 €</div>
            <div class="mb-header__item-container">
              <img
                class="mb-header__item-cart"
                src="./assets/shoppingBag.png"
                alt="Shopping Bag icon"
              />
            </div>
          </div>
        </nav>
      </div>
    `;
    shadowDOM.appendChild(linkElem)
    shadowDOM.append(template.content.cloneNode(true));
  }
}

customElements.define("mb-header", Header);
