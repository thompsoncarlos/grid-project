const template = document.createElement("template");
template.innerHTML = `
  <style>
    .mb-header {
      position: relative;
      width: 100%;
      background-color: var(--bg-header);
      z-index: 33;
    }
    
    .mb-header__top {
      max-width: 1024px;
      width: 86%;
      height: 96px;
      margin-left: auto;
      margin-right: auto;
      padding: 16px 0;
      position: relative;
      display: flex;
      justify-items: stretch;
      align-items: center;
    
      /* Todo: Verify if needed to crossbrowser */
      display: -ms-flexbox;
      display: -webkit-box;
      -webkit-box-align: center;
      -ms-flex-align: center;
    }
    
    .mb-header__logo-and-wordmark {
      left: 0;
      display: inline-flex;
      align-items: flex-end;
      position: absolute;
      transform: none;
      
      -ms-flex-align: end;
      -webkit-box-align: end;
      /* text-size-adjust: 100%; */
    }
    
    .mb-header__logo-wrapper {
      display: flex;
      justify-content: center;
      
      -ms-flex-pack: center;
      -webkit-box-pack: center;
    }
    
    .mb-header__star {
      width: 64px;
      height: 64px;
    }
    
    .mb-header__wordmark-wrapper {
      margin-left: 64px;
    }
    
    .mb-header__wordmark {
      width: 111px;
      height: 13px;
    }
    
    .mb-header__top-menu-tools {
      right: 0;
      top: 60px;
      display: inline-flex;
      align-items: center;
      position: absolute;
    }
    
    .mb-header__price {
      margin-left:12px;
      display: flex;
      color: var(--text-color-contrast);
    }
    
    .mb-header__item-container {
      margin-left:12px;
      display: flex;
      
      display: -ms-flexbox;
      display: -webkit-box;
    }
    
    .mb-header__item-cart {
      width: 18px;
      height: 18px;
      display: flex;
    }
  </style>

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

class Header extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: "open" });
    shadowDOM.append(template.content.cloneNode(true));
  }
}

customElements.define("mb-header", Header);
