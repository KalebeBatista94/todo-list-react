import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerItens = styled.div`
  background-color: #fff;
  padding: 25px 20px;
  border-radius: 5px;

  ul {
    margin-top: 50px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  padding: 5px;
  margin-right: 15px;
  height: 30px;
  width: 320px;

  &::placeholder {
    font-size: 0.9em;
    padding-left: 0.7em;
  }
`;

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  color: #fff;
  line-height: 2px;
  font-weight: 700;
  height: 30px;
  width: 80px;
`;

export const ListItem = styled.div`
  background: ${ props => props.isFinished ? '#FEFE97' : 'E4E4E4'};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  margin-bottom: 30px;

  .finishButton {
    transition: 0.5s;
    font-size: 1.5em;
  }

  .trashCan {
    transition: 0.5s;
    font-size: 1.5em;
  }

  .finishButton:hover {
    transform: scale(1.5);
    transition: 0.5s;
    cursor: pointer;
  }

  .trashCan:hover {
    transform: scale(1.5);
    transition: 0.5s;
    cursor: pointer;
  }
`;
