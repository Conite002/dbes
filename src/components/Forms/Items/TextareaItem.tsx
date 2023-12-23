import React, { useEffect, useState } from "react";
import { IonTextarea, IonItem, IonLabel, generateId, IonInput } from "@ionic/react";
import { generateUniqueId } from "../../../utils/getID";

interface Item {
  name: string;
  value: string;
  error: string;
  type: string;
  id:string
}

interface TextareaItemProps {
  getdata: (item: Item) => void;
}

const TextareaItem: React.FC<TextareaItemProps> = ({ getdata }: TextareaItemProps) => {
  const [item, setItem] = useState<Item>({
    name: "",
    value: "",
    error: "",
    type: "textarea",
    id: generateUniqueId()
  });

  const handleTextareaChange = (e: any) => {
    const { value, name } = e.detail;
    setItem((prevItem) => ({ ...prevItem, ['value']:value }));
  };

  useEffect(() => {
    getdata(item);
  }, [item]);

  return (
    <IonItem>
      <IonInput
          type="text"
          placeholder="Textarea name"
          value={item.name}
          onIonChange={e => setItem(prev => (
            {
              ...prev,
              ['name']: e.detail.value!
            }
          ))}
      />
      &
      <IonTextarea
        placeholder="Valeur"
        value={item.value}
        onIonChange={handleTextareaChange}
      />
    </IonItem>
  );
};

export default TextareaItem;
