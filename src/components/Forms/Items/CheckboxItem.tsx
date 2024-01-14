import React, { useEffect, useState } from "react";
import { IonCheckbox, IonCol, IonIcon, IonInput, IonItem, IonLabel, IonRow, generateId } from "@ionic/react";
import { trashSharp } from "ionicons/icons";
import { Item } from "../../../utils/interface";


interface CheckboxItemProps {
  addOption: (item: Item) => void;
  option:Item,
  handleDeleteCheckbox: (id: string) => void
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ option,addOption,handleDeleteCheckbox }) => {
  const [item, setItem] = useState<Item>(option);

  const handleCheckboxChange = (e:any) => {
    const { name, checked } = e.target as HTMLIonCheckboxElement;
    setItem((prevItem) => ({ 
        ...prevItem,
        ['value']: checked }
    ));
  };




  useEffect(() => {
    addOption(item);
  }, [item]);

  return (
    <>
      <IonRow>
        <IonCol>
          <IonInput
              className="input-title"
              placeholder="option"
              type="text"
              name="checkboxName"
              value={item.name}
              onIonChange={(e) => setItem((prevItem) => ({ ...prevItem, name: e.detail.value! }))}
          />
        </IonCol>
        <IonCol size="auto" className="ion-justify-content-center ion-align-items-center">
          <IonCheckbox
            name="ischecked"
            checked={item.value}
            onIonChange={handleCheckboxChange}
          />
        </IonCol>
        <IonCol size="auto" className="ion-text-center center-ion">
          <IonIcon
            icon={trashSharp}
            onClick={() => handleDeleteCheckbox(item.id)}
          />

        </IonCol>
      </IonRow>
    </>
  );
};

export default CheckboxItem;
