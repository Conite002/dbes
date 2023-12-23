import React, { useEffect, useState } from "react";
import { IonCheckbox, IonInput, IonItem, IonLabel, generateId } from "@ionic/react";
import { CheckboxChangeEventDetail, IonCheckboxCustomEvent } from "@ionic/core";
import { generateUniqueId } from "../../../utils/getID";

interface Item {
  name: string;
  error: string;
  type: string;
  id: string;
  value:boolean
}

interface CheckboxItemProps {
  getdata: (item: Item) => void;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ getdata }) => {
  const [item, setItem] = useState<Item>({
    name: "",
    error: "",
    type: "checkbox",
    value: false,
    id: generateUniqueId()
  });


  const handleCheckboxChange = (e:any) => {
    const { name, checked } = e.target as HTMLIonCheckboxElement;
    setItem((prevItem) => ({ 
        ...prevItem,
        ['value']: checked }));
};

  useEffect(() => {
    getdata(item);
  }, [item]);

  console.log(item)
  return (
    <IonItem>
      <IonInput
          placeholder="Nom du champs"
          type="text"
          name="checkboxName"
          value={item.name}
          onIonChange={(e) => setItem((prevItem) => ({ ...prevItem, name: e.detail.value! }))}
      />
      <IonCheckbox
        name="ischecked"
        checked={item.value}
        onIonChange={handleCheckboxChange}
      />
    </IonItem>
  );
};

export default CheckboxItem;
