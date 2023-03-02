import { useState } from "react";
import "./App.css";
import friendsList from "./assets/friendsJs.json";
import Card from "./components/Card/Card";
import Button from './components/Button/Button';

function App() {
  const [visibleFriend, setVisibleFriend] = useState(0);

  const changeFriend = () => {
    const newVisibleFriend = visibleFriend + 1;

    if (newVisibleFriend === friendsList.length) setVisibleFriend(0);
    else setVisibleFriend(newVisibleFriend);
  };
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style = `background: ${color}`;
  return (
    <div className="App">
      <h1>Ruleta Academlo</h1>
      <Card friend={friendsList[visibleFriend]} changeFriend={changeFriend} />
    </div>
  );
}

export default App;
