"use client"

import React from 'react';

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

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <Styled.ListContainer>
      {transactions.map((transaction) => (
        <Styled.TransactionItem key={transaction.id}>
          <p><b>Motorista:</b> {transaction.driver}</p>
          <p><b>CPF:</b> {transaction.cpf}</p>
          <p><b>Tipo de conbustivel:</b> {transaction.type}</p>
          <p><b>Quantidade:</b> {transaction.amount}</p>
          <p><b>Preço:</b> {transaction.price}</p>
          <p><b>Data da compra:</b> {transaction.createdAt}</p>
        </Styled.TransactionItem>
      ))}
    </Styled.ListContainer>
  );
};

export default TransactionList;
