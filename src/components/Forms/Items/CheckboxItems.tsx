import React, { useEffect, useState } from "react";
import { IonButton, IonCheckbox, IonCol, IonIcon, IonInput, IonItem, IonLabel, IonRow, generateId } from "@ionic/react";
import { CheckboxChangeEventDetail, IonCheckboxCustomEvent } from "@ionic/core";
import { generateUniqueId } from "../../../utils/getID";
import { addCircle } from "ionicons/icons";
import CheckboxItem from "./CheckboxItem";
import './checkbox.css'
import { Item } from "../../../utils/interface";



interface CheckboxItemProps {
  getdata: (item: Item) => void;
}

const CheckboxItems: React.FC<CheckboxItemProps> = ({ getdata }) => {
  const [checkBoxParent, setCheckBoxParent] = useState<Item>({
    name: "",
    type: "checkbox",
    value: [{}],
    id: generateUniqueId()
  });
  const [checkitems, setCheckItems] = useState<Item[]>([]);

  const handleAddOption = (item:Item) =>{

      setCheckBoxParent(prev => {
        const existingOptIndex = prev.value.findIndex((prevItem:Item) => prevItem.id === item.id);
        if(existingOptIndex !== -1){
          const updatedOpts = [...prev.value];
          updatedOpts[existingOptIndex] = item;
        
          return {...prev, value:updatedOpts}
        }
        return {...prev, value:[...prev.value, item]}
      });
  }

  const handleAddCheckItem = (e:any) => {
    const newCheckItem:Item = {
      name: '',
      type: "checkbox", 
      value: false, 
      id: generateUniqueId()
    }
    setCheckItems([...checkitems,newCheckItem]);
};

const handleDeleteCheckbox = (id:string) =>{
  setCheckBoxParent((prev) => {
    const updatedOptions = prev.value.filter((item:Item) => item.id !== id);
    console.log(updatedOptions)

    return { ...prev, value: updatedOptions };
  });
  setCheckItems(prev => {
    const updatedOptions = prev.filter((item: Item) => item.id !== id);
    console.log(updatedOptions);
    return updatedOptions;
  });
}

  useEffect(() => {
    getdata(checkBoxParent);
  }, [checkBoxParent]);

  return (
    <>
        <IonRow>
          <IonInput
              className="input-title"
              placeholder="Quelle question voulez vous pauser ?"
              type="text"
              name="checkboxName"
              value={checkBoxParent.name}
              onIonChange={(e) => setCheckBoxParent((prevItem) => ({ ...prevItem, name: e.detail.value! }))}
          />
        </IonRow>
        <IonRow>
          <IonButton className="custom-button" onClick={(e) =>handleAddCheckItem(e)}>
            <IonIcon icon={addCircle} /> Option
          </IonButton>
        </IonRow>
        <IonRow>
          {
            checkitems.map( (checkitem, index) => <IonRow key={index}>
              <CheckboxItem option={checkitem} addOption={handleAddOption} handleDeleteCheckbox={handleDeleteCheckbox} />
            </IonRow> )
          }
        </IonRow>
    </>
  );
};

export default CheckboxItems;
