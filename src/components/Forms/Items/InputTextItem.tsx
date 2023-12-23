import React, { useEffect, useState } from "react";
import { IonCol, IonRow, IonInput, IonLabel, IonSelect, IonSelectOption, InputChangeEventDetail, generateId } from "@ionic/react";
import { generateUniqueId } from "../../../utils/getID";

interface Item {
  name: string;
  value: string;
  error: string;
  type: string;
  id: string;
}

interface InputTextItemProps {
  getdata: (item: Item) => void;
}

const InputTextItem: React.FC<InputTextItemProps> = ({ getdata }) => {
    const [item, setItem] = useState<Item>({
        name: "",
        value: "",
        error: "",
        type: "",
        id: generateUniqueId()
    });

    const handleInputChange = (e: CustomEvent<InputChangeEventDetail>) => {
        const { name, value } = e.target as HTMLIonInputElement;
        setItem((prevItem) => ({ 
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
                <IonInput
                    placeholder="Nom du champs"
                    type="text"
                    name="name"
                    value={item.name}
                    onIonChange={handleInputChange}
                />
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                <IonInput
                   placeholder="Valeur du champs"
                    type="text"
                    name="value"
                    value={item.value}
                    onIonChange={handleInputChange}
                />
                </IonCol>
            </IonRow>

        </>
    );
};

export default InputTextItem;
