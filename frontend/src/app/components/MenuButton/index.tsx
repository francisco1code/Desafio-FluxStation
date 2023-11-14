import { useRouter } from "next/navigation";
import Styled from './styles'

export function MenuButton() {

  const { push } = useRouter()

  const handleRegisterClick = () => {
    push("/register")
  };

  const handleHistoricClick = () => {
    push("/historic")
  };

  return (
    <Styled.CenteredContainer>
      <Styled.HomeWrapper>
        <Styled.StyleRegister onClick={handleRegisterClick}>Cadastro</Styled.StyleRegister>
        <Styled.StyleRegister onClick={handleHistoricClick}>Histórico </Styled.StyleRegister>
      </Styled.HomeWrapper>
    </Styled.CenteredContainer>
  );
}
