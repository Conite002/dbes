import React from "react";

interface CheckboxItemForViewProps {
  item: {
    name: string;
    value: string;
    error: string;
    type: string;
    id: string;
  };
}

const CheckboxItemForView: React.FC<CheckboxItemForViewProps> = ({ item }) => {
  return (
    <div>
      <label>{item.name}</label>
      <p>{item.value}</p>
      <p>{item.error}</p>
    </div>
  );
};

export default CheckboxItemForView;
