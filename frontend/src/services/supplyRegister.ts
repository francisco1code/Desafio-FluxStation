import api from './api';

class SupplyRegister {
  postSupply(data: { driver: string, cpf: string, type: string, amount: string, price: string }) {
    return api.post(`supply`, data);
  }
}

export const supplyRegister  = new SupplyRegister();
Object.freeze(supplyRegister);