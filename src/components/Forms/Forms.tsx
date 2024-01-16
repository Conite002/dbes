import React, { useEffect, useState } from "react";
import { IonGrid, IonRow, IonCol, IonIcon, generateId, IonText, IonButton, IonTextarea, IonContent } from "@ionic/react";
import { add, airplane, bagOutline, checkbox, checkmarkCircle, checkmarkCircleOutline, eyeOutline, information, informationCircleOutline, radioButtonOff, radioButtonOffOutline, radioButtonOn, text, textOutline, textSharp, trashBin, watchOutline } from "ionicons/icons";
import InputTextItem from "./Items/InputTextItem";
import TextareaItem from "./Items/TextareaItem";
import './Forms.css'
import Apercu from "../Apercu/Apercu";
import CheckboxItems from "./Items/CheckboxItems";
import RadioItems from "./Items/RadioItems";
import Evaluation from "../Evaluation/Evaluation";

interface FormData {
  type: string;
  id: string;
  value: any,
  name:string,
  error: string,
}

const Forms: React.FC = () => {
  const [data, setData] = useState<FormData[]>([]);
  const [previewsForm, setPreviewsForm] = useState<FormData[] | null>(null);
  const [hideen, setHideen] = useState(false);
  const [showQRA, setShowQRA] = useState({
    questions:1,
    reponses:0,
    apercu:0,
    evaluation:0,
  });


  const getData = (item: any) => {
    console.log(item)
    if(item && item.name !==''){
      setData((prev) => {
        const existingItemIndex = prev.findIndex((prevItem) => prevItem.id === item.id);
    
        if (existingItemIndex !== -1) {
          const updatedData = [...prev];
          updatedData[existingItemIndex] = item;
          return updatedData;
        }  
        return [...prev, item];
      });
    }
  };
  
  useEffect(() => {
    console.log(data)

  }, [data]);

  const addItems = (type: string) => {
    const newItem: FormData = {
      type,
      error:'',
      value:'',
      name:'',
      id: generateId(),
    };
    setPreviewsForm((prev) => (prev ? [...prev, newItem] : [newItem]));
  };

  const removeItem = (id: string) => {
    setPreviewsForm((prev) => (prev ? prev.filter((item) => item.id !== id) : null));
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const showItems = () =>{
    setHideen(!hideen)
  }

  const handleDisplayQRA = (values:any)=>{
    setShowQRA(prev => (
      {
        questions:values[0],
        reponses:values[1],
        apercu:values[2],
        evaluation:values[3],
      }
    ))
  }

  const saveToDB = () =>{
    if(data.length !== 0){
      //firebase
    }
  }
  
  return (
    <IonGrid>
      <IonRow className="top-menu">
        <IonCol size="auto">
          <IonText 
            className={showQRA.questions ? "active" : ""}
           onClick={e => handleDisplayQRA([true,false,false, false])}>Questions</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText 
          className={showQRA.reponses ? "active" : ""}
          onClick={e => handleDisplayQRA([false,true,false, false])}>Réponses</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText 
            className={showQRA.apercu ? "active" : ""} 
            onClick={e => handleDisplayQRA([false,false,true, false])}>
            <IonIcon color="primary" icon={eyeOutline}></IonIcon>
            Apercu
          </IonText>

        </IonCol>
        <IonCol size="auto">
          <IonText 
            className={showQRA.evaluation ? "active" : ""} 
            onClick={e => handleDisplayQRA([false,false,false,true])}>
            <IonIcon color="primary" icon={watchOutline}></IonIcon>
            Evaluation
          </IonText>

        </IonCol>
      </IonRow>
        {/* display questions */}
      <IonRow className="bg-form">

        {
          showQRA.questions&& 
          <>
            <IonRow color="primary" className="form-container">
              <IonCol>

                {
                previewsForm?.length !=0 &&
                previewsForm?.map((item) => (
                  <IonRow key={item.id} className="container-edition-mode">
                    <IonCol className="edition-mode">
                      {item.type === "inputtextitem" && <InputTextItem getdata={getData} value={item.value} />}
                      {item.type === "checkboxitem" && <CheckboxItems getdata={getData} value={item.value} />}
                      {item.type === "radioitem" && <RadioItems getdata={getData} value={item.value} />}
                      {item.type === "textareaitem" && <TextareaItem getdata={getData} value={item.value} />}
                    </IonCol>
                    <IonCol size="auto">
                      <IonIcon color={'primary'} onClick={() => removeItem(item.id)} icon={trashBin} />
                    </IonCol>
                  </IonRow>
                ))}

                <IonRow >
                    <IonCol size="auto">
                      <IonButton
                        onClick={showItems}
                        style={{color:'white', fontWeight:'bold'}}
                        className="custom-button"  
                      >
                        <IonIcon icon={add}></IonIcon>
                          Ajouter
                      </IonButton>
                    </IonCol>
                    <IonCol className="ion-align-self-center">
                    {
                      hideen && 
                      <IonRow
                      className={` ${hideen ? "custom-bg animate-fade-in" : "custom-bg"} ion-justify-content-strech`}
                      >
                        <IonCol className="item" size="auto" onClick={() => addItems("inputtextitem")}>
                          <IonText>
                            <IonIcon className="iconItem" color="primary" icon={textSharp}></IonIcon>
                            Texte
                          </IonText>
                        </IonCol>
                        <IonCol className="item" size="auto" onClick={() => addItems("checkboxitem")}>
                          <IonText>
                            <IonIcon className="iconItem" color="primary" icon={checkmarkCircle}></IonIcon>
                            Checkbox
                          </IonText>
                        </IonCol>
                        <IonCol className="item" size="auto" onClick={() => addItems("textareaitem")}>
                          <IonIcon className="iconItem" color="primary" icon={informationCircleOutline}></IonIcon>
                          <IonText>Description</IonText>
                        </IonCol>
                        <IonCol className="item" size="auto" onClick={() => addItems("radioitem")}>
                          <IonIcon className="iconItem" color="primary" icon={radioButtonOffOutline}></IonIcon>
                          <IonText>Choix unique</IonText>
                        </IonCol>
                      </IonRow>
                    }
                  </IonCol>
                  
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol><IonButton onClick={saveToDB}>Sauvegarder</IonButton> </IonCol>
            </IonRow>
          </>
        }
      </IonRow>

        {
          showQRA.reponses ? 
          <IonRow>Réponses</IonRow> : ""
        }
        {
          showQRA.apercu ?
          <IonRow className="container-edition-mode">
              <IonCol className="edition-mode">
               <Apercu formData={data}  getdata={getData}/>
            </IonCol>

          </IonRow> : ''
        }

        {
          showQRA.evaluation ?
          <IonRow className="container-edition-mode">
              <IonCol className="edition-mode">
               <Evaluation formData={data}  getdata={getData}/>
            </IonCol>
          </IonRow> : ''
        }
    </IonGrid>
  );
};

export default Forms;
