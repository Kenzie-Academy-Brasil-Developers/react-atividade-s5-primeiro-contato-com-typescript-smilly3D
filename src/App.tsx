import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Input } from "./components/Input";

interface Person {
  name: string;
  idade: number;
  hobby: string;
}

function App() {
  const [list, setList] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const [idade, setIdade] = useState(0);
  const [hobby, setHobby] = useState("");

  const handleSubmit = (name: string, idade: number, hobby: string) => {
    const person = { name, idade, hobby };

    setList([...list, person]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Nome"
          label="Nome "
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Idade"
          label="Idade "
          onChange={(e) => setIdade(Number(e.target.value))}
        />
        <Input
          placeholder="Hobby"
          label="Hobby "
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => handleSubmit(name, idade, hobby)}>Enviar</button>

        {list &&
          list.map((item: { name: string; idade: number; hobby: string }) => (
            <Card name={name} idade={idade} hobby={hobby} />
          ))}
      </header>
    </div>
  );
}

export default App;
