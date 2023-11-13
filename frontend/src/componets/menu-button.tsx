"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";


const StyleRegister = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 200px;
  color: #ffffff;
  border-radius: 20px;
  font-size: 25px;
  background-color: #426B1F;

  &:hover {
    background-color:#32491F;
  }
`;

const SpacedStyleRegister = styled.div`
margin-top: 100px;
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  margin-top: 200px;
`;

export function MenuButton() {

  const { push } = useRouter()

  const handleRegisterClick = () => {
    push("/register")
  };

  const handleHistoricClick = () => {
    push("/historic")
  };

  return (
    <CenteredContainer>
      <div>
        <StyleRegister onClick={handleRegisterClick} > Cadastro</StyleRegister>
        <SpacedStyleRegister/>
        <StyleRegister onClick={handleHistoricClick} > Histórico </StyleRegister>

      </div>
    </CenteredContainer>
  );
}
