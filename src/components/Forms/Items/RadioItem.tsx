import React, { useEffect, useState } from "react";
import { IonRadio, IonItem, IonLabel, IonRadioGroup, generateId, IonInput } from "@ionic/react";
import { generateUniqueId } from "../../../utils/getID";

interface Item {
  name: string;
  value: string;
  error: string;
  type: string;
  id: string
}

interface RadioItemProps {
  getdata: (item: Item) => void;
}

const RadioItem: React.FC<RadioItemProps> = ({ getdata }: RadioItemProps) => {
  const [item, setItem] = useState<Item>({
    name: "",
    value: "",
    error: "",
    type: "radio",
    id: generateUniqueId()
  });

  const handleRadioChange = (e: any) => {
    const { value } = e.detail;
    setItem((prevItem) => ({ ...prevItem, value }));
  };

  useEffect(() => {
    getdata(item);
  }, [item]);
  const createRadios = () => {
    const radioOptions = item.name.split(',').map((option, index) => (
      <IonRadio key={index} value={option} />
    ));
    return radioOptions;
  };
  console.log(item)

  return (
    <IonItem>
      <IonInput
          type="text"
          name="radioName"
          placeholder="Les options"
          value={item.name}
          onIonChange={e=> (
            setItem((prevItem) => ({ ...prevItem, 'name': e.detail.value! }))
          )}
      />
      <IonRadioGroup value={item.value} onIonChange={handleRadioChange}>
        {createRadios()}      
      </IonRadioGroup>
    </IonItem>
  );
};

export default RadioItem;
