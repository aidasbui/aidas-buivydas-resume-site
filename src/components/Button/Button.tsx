import React from 'react';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="w-36 rounded-xl border-2 border-color-purple-700 bg-color-secondary p-2 font-vt323 text-2xl leading-none text-color-primary transition-colors duration-75 hover:border-color-purple-800 hover:bg-color-secondary/70 hover:text-color-purple-800">
      {text}
    </button>
  );
};

export default Button;
