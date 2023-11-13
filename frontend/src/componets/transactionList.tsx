"use client"

// components/TransactionList.tsx
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

interface TransactionListProps {
  transactions: Transaction[];
}

const ListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const TransactionItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
`;

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <ListContainer>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id}>
          <p>Motorista: {transaction.driver}</p>
          <p>CPF: {transaction.cpf}</p>
          <p>Tipo de conbustivel: {transaction.type}</p>
          <p>Quantidade: {transaction.amount}</p>
          <p>Preço: {transaction.price}</p>
          <p>Data da compra: {transaction.createdAt}</p>
        </TransactionItem>
      ))}
    </ListContainer>
  );
};

export default TransactionList;
