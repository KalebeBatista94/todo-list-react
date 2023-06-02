import { useState } from "react";
import { v4 as uuid } from "uuid";

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Input, Container, ContainerItens, Button, ListItem } from "./styles";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState([]);

  function changedInput(e) {
    setTask(e.target.value);
  }

  function clickedButton() {
    setList([...list, { id: uuid(), task, finished: false }]);
  }

  return (
    <Container>
      <ContainerItens>
        <Input
          onChange={changedInput}
          placeholder="O que tenho para fazer..."> 
        </Input>
        <Button onClick={clickedButton}>Adicionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem isFinished={item.finished} key={item.id}>
              <FcCheckmark />
              <li>{item.task}</li>
              <FcEmptyTrash />
            </ListItem>
          ))}
        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App;
