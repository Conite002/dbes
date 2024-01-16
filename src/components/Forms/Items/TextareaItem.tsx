import React, { useEffect, useState } from "react";
import { IonTextarea, IonItem, IonLabel, generateId, IonInput, IonRow } from "@ionic/react";
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
  value: string;
}

const TextareaItem: React.FC<TextareaItemProps> = ({ getdata, value }: TextareaItemProps) => {
  const [item, setItem] = useState<Item>({
    name: "",
    value: value,
    error: "",
    type: "",
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
    <>
      <IonRow>
        <IonInput
            type="text"
            className="input-title"

            placeholder="Question"
            value={item.name}
            onIonChange={e => setItem(prev => (
              {
                ...prev,
                ['name']: e.detail.value!
              }
            ))}
        />
      </IonRow>
      <IonRow>
        <IonTextarea
          className="input-content input-content-textarea"
          rows={4}
          placeholder="Votre réponse"
          value={item.value}
          onIonChange={handleTextareaChange}
        />
      </IonRow>
    </>
  );
};

export default TextareaItem;
