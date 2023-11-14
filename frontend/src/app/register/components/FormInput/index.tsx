"use client"

import { useRouter } from 'next/navigation';

import Styled from './styles';

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
    <Styled.FormContainer>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.FormGroup>
          <Styled.Label htmlFor="nome">Nome:</Styled.Label>
          <Styled.Input type="text" id="nome" name="nome" required />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="cpf">CPF:</Styled.Label>
          <Styled.Input type="text" id="cpf" name="cpf" required />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="combustivel">Tipo de Combustível:</Styled.Label>
          <Styled.Input type="text" id="combustivel" name="combustivel" required />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="quantidade">Quantidade em Litros:</Styled.Label>
          <Styled.Input type="text" id="quantidade" name="quantidade" step="0.01" required />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="preco">Preço:</Styled.Label>
          <Styled.Input type="text" id="preco" name="preco" step="0.01" required />
        </Styled.FormGroup>
        <Styled.SubmitButton type="submit">Enviar</Styled.SubmitButton>
        <Styled.BackButton onClick={handleBackClick}>Voltar</Styled.BackButton>
      </Styled.Form>
    </Styled.FormContainer>
  );
};

export default FormImput;
