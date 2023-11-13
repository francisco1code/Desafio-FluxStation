"use client"

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

const BackButton = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
`;

const FormImput = () => {
  const { push } = useRouter();

  const handleBackClick = () => {
    push("/");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const cpf = e.target.cpf.value;
    const combustivel = e.target.combustivel.value;
    const quantidade = parseFloat(e.target.quantidade.value);
    const preco = parseFloat(e.target.preco.value);
    

    const valorFinalCalculado = quantidade * preco;

    alert(`Preço Final: R$ ${valorFinalCalculado.toFixed(2)}`);
    handleBackClick()
  };



  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="nome">Nome:</Label>
          <Input type="text" id="nome" name="nome" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cpf">CPF:</Label>
          <Input type="text" id="cpf" name="cpf" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="combustivel">Tipo de Combustível:</Label>
          <Input type="text" id="combustivel" name="combustivel" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="quantidade">Quantidade em Litros:</Label>
          <Input type="text" id="quantidade" name="quantidade" step="0.01" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="preco">Preço:</Label>
          <Input type="text" id="preco" name="preco" step="0.01" required />
        </FormGroup>
        <SubmitButton type="submit">Enviar</SubmitButton>
        <BackButton onClick={handleBackClick}>Voltar</BackButton>
      </Form>
    </FormContainer>
  );
};

export default FormImput;
