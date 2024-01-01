import React, { useEffect, useState } from "react";
import { IonRadio, IonItem, IonLabel, IonRadioGroup, generateId, IonInput, IonCol, IonRow, IonText } from "@ionic/react";
import { generateUniqueId } from "../../../utils/getID";
import RadioItem from "./RadioItem";
import './checkbox.css'
interface Item {
  name: string;
  value: any;
  error: string;
  type: string;
  id: string
}

interface RadioItemProps {
  getdata: (item: Item) => void;
}

const RadioItems: React.FC<RadioItemProps> = ({ getdata }: RadioItemProps) => {
  const [item, setItem] = useState<Item>({
    name: "",
    value: "",
    error: "",
    type: "",
    id: generateUniqueId()
  });



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
            placeholder="Pausez votre question"
            value={item.name}
            onIonChange={e=> (
              setItem((prevItem) => ({ ...prevItem, 'name': e.detail.value! }))
            )}
        />
      </IonRow>
      <hr style={{backgroundColor:'white', height:'1rem'}}/>
      <RadioItem  getdata={getdata}/>
    </>
  );
};

export default RadioItems;
