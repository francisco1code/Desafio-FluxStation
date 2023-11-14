"use client";

import React, { useEffect, useState } from 'react';

import { productHistoric } from '@/services/productHistoric';
import TransactionList from '@/app/historic/components/TransactionList';
import Button from '@/components/Button';

import Styled from './styles';

interface Transaction {
  id: number;
  driver: string;
  cpf: string;
  type: string;
  amount: string;
  price: string;
  createdAt: string;
}

const HomePage: React.FC = () => {
  const [productlist, updateProductList] = useState([]);
  
  const loadAllProducts = async () => {
    try {
      const result = await productHistoric.getProducts();
      updateProductList(result.data.results);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  const modifiedTransactions: Transaction[] = productlist.map((transaction: Transaction) => ({
      ...transaction,
      createdAt: new Date(transaction.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }),
    }));
  
  
  const transactions: Transaction[] = modifiedTransactions;
  
  return (
    <Styled.WrapHistoric>
      <Styled.HistoricHeader>
        <Button redirect='/'>Voltar</Button>
        <Styled.TransactionItem>Lista de Transações</Styled.TransactionItem>
      </Styled.HistoricHeader>
      <TransactionList transactions={transactions} />
    </Styled.WrapHistoric>
  );
};

export default HomePage;