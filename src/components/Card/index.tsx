import "./styled.css";

interface ICardProps {
  name: string;
  idade: number;
  hobby: string;
}

export const Card = ({ name, idade, hobby }: ICardProps) => (
  <>
    <div className="card">
      <p>Nome: {name}</p>
      <p>Idade: {idade}</p>
      <p>Hobby: {hobby}</p>
    </div>
  </>
);
