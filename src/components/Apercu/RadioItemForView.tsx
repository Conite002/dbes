import React from "react";

interface RadioItemForViewProps {
  item: {
    name: string;
    value: string;
    error: string;
    type: string;
    id: string;
  };
}

const RadioItemForView: React.FC<RadioItemForViewProps> = ({ item }) => {
  return (
    <div>
      <label>{item.name}</label>
      <p>{item.value}</p>
      <p>{item.error}</p>
    </div>
  );
};

export default RadioItemForView;
