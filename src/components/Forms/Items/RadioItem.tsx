import React, { useEffect, useState } from "react";
import { IonRadio, IonItem, IonLabel, IonRadioGroup, generateId, IonInput, IonCol, IonRow, IonText } from "@ionic/react";
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
  value: string;
}

const RadioItem: React.FC<RadioItemProps> = ({ getdata, value }: RadioItemProps) => {
  const [item, setItem] = useState<Item>({
    name: "",
    value: value,
    error: "",
    type: "",
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
      <IonCol size="auto" className="center-radio-item">
        <IonText className="radio-item">{option} </IonText>
        <IonRadio key={index} value={option} />
      </IonCol>
    ));
    return radioOptions;
  };

  return (
    <>
      <IonRow>
        <IonInput
          className="input-radio-text"
            type="text"
            name="radioName"
            placeholder="Les options"
            value={item.name}
            onIonChange={e=> (
              setItem((prevItem) => ({ ...prevItem, 'name': e.detail.value! }))
            )}
        />
      </IonRow>
      <IonRow>
        <IonRadioGroup value={item.value} onIonChange={handleRadioChange}>
          <IonRow color="secondary">
            {createRadios()}    
          </IonRow>  
        </IonRadioGroup>
      </IonRow>
    </>
  );
};

export default RadioItem;
