import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="border p-8 rounded bg-gray-100 text-right text-2xl">
      {value}
    </div>
  );
};

export default Display;
