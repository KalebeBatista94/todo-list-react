import { useState } from "react"
import { v4 as uuid } from "uuid"

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState([])

  function changedInput(e) {
    setTask (e.target.value)
  }

  function clickedButton() {
    setList([...list, {id: uuid(), task}])
  }

  return (
    <div>
      <input onChange={changedInput} placeholder="O que tenho para fazer..."></input>
      <button onClick={clickedButton}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </div>
  ) 
}

export default App;
