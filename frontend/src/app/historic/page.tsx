"use client"

import TransactionList from '@/componets/transactionList';
import React from 'react';
import styled from 'styled-components';

interface Transaction {
  id: number;
  driver: string;
  cpf: string;
  type: string;
  amount: string;
  price: string;
  createdAt: string;
}

const TransactionItem = styled.div`
  padding: 10px;
`;

const BackButton = styled.button`
  width: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  

`;

const a = [
    {
        "id": 1,
        "driver": "francis",
        "cpf": "5",
        "type": "zé",
        "amount": "20litros",
        "price": "25.30",
        "createdAt": "2023-11-13T19:42:07.582Z"
    },
    {
        "id": 2,
        "driver": "francis",
        "cpf": "5",
        "type": "zé",
        "amount": "20litros",
        "price": "25.30",
        "createdAt": "2023-11-13T19:42:08.778Z"
    }
]

const modifiedTransactions: Transaction[] = a.map((transaction: Transaction) => ({
    ...transaction,
    createdAt: new Date(transaction.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }),
  }));


const transactions: Transaction[] = modifiedTransactions;

const HomePage: React.FC = () => {
  return (
    <div>
      <TransactionItem> Lista de Transações  </TransactionItem>
      <BackButton> Voltar</BackButton>
      <TransactionList transactions={transactions} />
 
    </div>
  );
};

export default HomePage;