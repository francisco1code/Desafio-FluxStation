import api from './api';

class ProductHistoric {
  getProducts() {
    return api.get(`supply`);
  }
}

export const productHistoric  = new ProductHistoric();
Object.freeze(productHistoric);