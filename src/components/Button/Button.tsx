import React from "react";

import "./Button.css";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <span>Frase Célebre</span>
      <span>➡</span>
      
    </button>
  );
};

export default Button;
