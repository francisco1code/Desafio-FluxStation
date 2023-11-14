import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
`;

const StyleRegister = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;
  margin-right: 40px;
  background-color: #426B1F;

  color: #ffffff;
  font-size: 20px;

  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #32491F;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 200px;
`;

const styles = {
  HomeWrapper,
  StyleRegister,
  CenteredContainer
}

export default styles