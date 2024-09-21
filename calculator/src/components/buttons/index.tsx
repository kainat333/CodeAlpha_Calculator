import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="border rounded p-4 m-1 bg-gray-200 hover:bg-gray-300"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
