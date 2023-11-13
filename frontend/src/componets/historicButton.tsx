"use client"

import styled from "styled-components";

const StyleHistoric = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 190px;
  color: #ffffff;
  border-radius: 20px;
  font-size: 25px;
  background-color: #426B1F;
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh; /* Define a altura para ocupar a altura total da viewport */
  margin-top: 200px;
`;

const StyleHistoricContainer = styled.div`
  margin-top: 150px; /* Adiciona uma margem de 20px abaixo do botão "Cadastro" */
`;

export function HistoricButton() {
  return (
    <CenteredContainer>
      <StyleHistoricContainer>
        <StyleHistoric> Cadastro </StyleHistoric>
      </StyleHistoricContainer>
      <StyleHistoric> Histórico </StyleHistoric>
    </CenteredContainer>
  );
}
