import styled from "styled-components";

const WrapHistoric = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

const HistoricHeader = styled.div`
  display: flex;
  align-items: center;


  padding: 10px 30px;
  margin-bottom: 40px;
`;

const TransactionItem = styled.div`
  padding: 0px 20px;
  font-size: 20px;
  font-weight: 600;
`;

const BackButton = styled.button`
  width: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const styles = {
    WrapHistoric,
    HistoricHeader,
    BackButton,
    TransactionItem
}

export default styles