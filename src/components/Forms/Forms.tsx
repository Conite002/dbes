import React, { useState } from "react";
import { IonGrid, IonRow, IonCol, IonIcon, generateId, IonText } from "@ionic/react";
import { airplane, bagOutline, checkbox, radioButtonOff, radioButtonOn, text, trashBin } from "ionicons/icons";
import InputTextItem from "./Items/InputTextItem";
import CheckboxItem from "./Items/CheckboxItem";
import RadioItem from "./Items/RadioItem";
import TextareaItem from "./Items/TextareaItem";

interface FormData {
  type: string;
  id: string;
}

const Forms: React.FC = () => {
  const [data, setData] = useState<FormData[]>([]);
  const [previewsForm, setPreviewsForm] = useState<FormData[] | null>(null);

  const getData = (item: any) => {
    setData((prev) => {
      const existingItemIndex = prev.findIndex((prevItem) => prevItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        const updatedData = [...prev];
        updatedData[existingItemIndex] = item;
        return updatedData;
      }  
      return [...prev, item];
    });
  };
  

  const addItems = (type: string) => {
    const newItem: FormData = {
      type,
      id: generateId(),
    };
    setPreviewsForm((prev) => (prev ? [...prev, newItem] : [newItem]));
  };

  const removeItem = (id: string) => {
    setPreviewsForm((prev) => (prev ? prev.filter((item) => item.id !== id) : null));
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  console.log(data)
  return (
    <IonGrid>
      {previewsForm?.length !=0 &&
        previewsForm?.map((item) => (
          <IonRow key={item.id}>
            <IonCol>
              {item.type === "inputtext" && <InputTextItem getdata={getData} />}
              {item.type === "checkboxitem" && <CheckboxItem getdata={getData} />}
              {item.type === "radioitem" && <RadioItem getdata={getData} />}
              {item.type === "textareaitem" && <TextareaItem getdata={getData} />}
            </IonCol>
            <IonCol>
              <IonIcon onClick={() => removeItem(item.id)} icon={trashBin} />
            </IonCol>
          </IonRow>
        ))}
        <IonRow >

          {/* {data.map((item, index) => (
              <>
                <IonCol key={index}>
                  {item.type === "inputtext" && <InputTextItem getdata={getData} />}
                  {item.type === "checkboxitem" && <CheckboxItem getdata={getData} />}
                  {item.type === "radioitem" && <RadioItem getdata={getData} />}
                  {item.type === "textareaitem" && <TextareaItem getdata={getData} />}
                  <IonIcon onClick={() => removeItem(item.id)} icon={trashBin} />
                </IonCol>
              </>
          ))} */}
        </IonRow>

      <IonRow>
        <IonCol onClick={() => addItems("inputtext")}>
          <IonText>Text</IonText>
        </IonCol>
        <IonCol onClick={() => addItems("checkboxitem")}>
          <IonText>Checkbox</IonText>
        </IonCol>
        <IonCol onClick={() => addItems("textareaitem")}>
          <IonText>Textarea</IonText>
        </IonCol>
        <IonCol onClick={() => addItems("radioitem")}>
          <IonText>Radio Text</IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Forms;
