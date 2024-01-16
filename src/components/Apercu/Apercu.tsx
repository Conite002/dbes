import React from "react";
import InputTextItemForView from "./InputTextItemForView";
import CheckboxItemForView from "./CheckboxItemForView";
import RadioItemForView from "./RadioItemForView";
import TextareaItemForView from "./TextareaItemForView";
import './apercu.css'


interface ApercuProps {
    formData: Array<{
      name: string;
      value: string;
      error: string;
      type: string;
      id: string;
    }>,
    getdata: (item: any) => void;
  }
const Apercu :React.FC<ApercuProps> = ({ formData, getdata }) => {


    console.log(formData)
  return formData && (
    <>
      {formData.map((item) => {
        switch (item.type) {
          case "inputtextitem":
            return <InputTextItemForView key={item.id} itm={item} getdata={getdata} />;
          case "checkboxitem":
            return <CheckboxItemForView key={item.id} item={item} />;
          case "radioitem":
            return <RadioItemForView key={item.id} item={item} />;
          case "textareaitem":
            return <TextareaItemForView key={item.id} item={item} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Apercu;
