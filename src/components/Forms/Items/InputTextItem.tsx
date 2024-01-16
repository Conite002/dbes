import React, { useEffect, useState } from "react";
import { IonCol, IonRow, IonInput, IonLabel, IonSelect, IonSelectOption, InputChangeEventDetail, generateId } from "@ionic/react";
import { generateUniqueId } from "../../../utils/getID";
import { Item } from "../../../utils/interface";


interface InputTextItemProps {
  getdata: (item: Item) => void;
  value?: string;
}

const InputTextItem: React.FC<InputTextItemProps> = ({ getdata, value }) => {
    const [item, setItem] = useState<Item>({
        name: "",
        value: value,
        type: "inputtextitem",
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
                    className="input-title"
                    placeholder="Question"
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
                    className="input-content"
                    placeholder="Entrer votre réponse"
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
