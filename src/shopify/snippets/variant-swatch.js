import tools from "../lib/tools";

class VariantSwatch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._init();
  }

  _init() {
    this.form = this.querySelector("form");
    this.variantData = this._getVariantData();
    this.priceWrapper = this.querySelector("[data-price-wrapper]");

    if(!this.form || !this.variantData || !this.priceWrapper) return

    this.form.addEventListener("change", this._changeHandler.bind(this));
  }

  _changeHandler(event){
    const currentVariant = this.variantData.find(({id}) => id === +event.target.value);
    if(!currentVariant) return;

    this.priceWrapper.textContent = tools.formatMoney(currentVariant.price)
  }

  _getVariantData() {
    try {
      return JSON.parse(this.querySelector("[type='application/json']").textContent);
    }catch(err) {
      console.error("Parsing variant data", err);
    }
  }
}

customElements.define("variant-swatch", VariantSwatch);
