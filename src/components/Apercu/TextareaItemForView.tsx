import React from "react";

interface TextareaItemForViewProps {
  item: {
    name: string;
    value: string;
    error: string;
    type: string;
    id: string;
  };
}

const TextareaItemForView: React.FC<TextareaItemForViewProps> = ({ item }) => {
  return (
    <div>
      <label>{item.name}</label>
      <p>{item.value}</p>
      <p>{item.error}</p>
    </div>
  );
};

export default TextareaItemForView;
