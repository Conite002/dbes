import { InputChangeEventDetail, IonCol, IonInput, IonRow, IonText } from "@ionic/react";
import React, { useEffect, useState } from "react";
import './apercu.css'

interface InputTextItemForViewProps {
    itm: {
      name: string;
      value: string;
      error: string;
      type: string;
      id: string;
    },
    getdata: (item: any) => void;
  }
const InputTextItemForView: React.FC<InputTextItemForViewProps> =  ({ itm, getdata }) => {

  const [item, setItem] = useState<any>({
    name: itm.name,
    value: itm.value,
    error: itm.error,
    type: itm.type,
    id: itm.id
  });

const handleInputChange = (e: CustomEvent<InputChangeEventDetail>) => {
    const { name, value } = e.target as HTMLIonInputElement;
    setItem((prevItem:any) => ({ 
        ...prevItem,
        [name]: value }));
};


useEffect(() => {
  getdata(item);
}, [item]);

  return (
    <>
      <IonRow>
        <IonCol>
          <IonText
              className="input-title"
          >
            {item.name}
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
            <IonInput
                className="input-title"
                placeholder="Question"
                type="text"
                name="name"
                value={item.value}
                onIonChange={handleInputChange}
            />
          </IonCol>
      </IonRow>
      <p style={{backgroundColor:'red'}}>{item.error}</p>
    </>
  );
};

export default InputTextItemForView;
