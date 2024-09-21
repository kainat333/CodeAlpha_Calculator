import React, { useState } from 'react';
import Button from '../components/buttons';
import Display from '../display';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('0');

  const handleButtonClick = (label: string) => {
    if (label === 'C') {
      setInput('0');
    } else if (label === '=') {
      try {
        // Evaluate the expression using the Function constructor
        setInput(String(new Function(`return ${input}`)()));
      } catch {
        setInput('Error');
      }
    } else {
      if (input === '0' && !['+', '-', '*', '/'].includes(label)) {
        setInput(label);
      } else {
        setInput(prev => prev + label);
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-[url('/pictures/image.png')] bg-cover bg-center flex items-center justify-end p-5">
      <div className="max-w-md w-full p-8 bg-white bg-opacity-70 shadow-md mr-20">
        <Display value={input} />
        <div className="grid grid-cols-4 mt-4 gap-2">
          {['7', '8', '9', '/'].map(label => (
            <Button key={label} label={label} onClick={handleButtonClick} />
          ))}
          {['4', '5', '6', '*'].map(label => (
            <Button key={label} label={label} onClick={handleButtonClick} />
          ))}
          {['1', '2', '3', '-'].map(label => (
            <Button key={label} label={label} onClick={handleButtonClick} />
          ))}
          {['C', '0', '=', '+'].map(label => (
            <Button key={label} label={label} onClick={handleButtonClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
