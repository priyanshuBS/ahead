import React from "react";

interface ButtonProps {
  text: string;
  onChange?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onChange }) => {
  return <button onChange={onChange}>{text}</button>;
};

export default Button;
