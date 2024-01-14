import React, { useState } from 'react';
import InputTextItem from '../Forms/Items/InputTextItem';
import InputTextItemForView from '../Apercu/InputTextItemForView';
import CheckboxItemForView from '../Apercu/CheckboxItemForView';
import RadioItemForView from '../Apercu/RadioItemForView';
import TextareaItemForView from '../Apercu/TextareaItemForView';
import { IonRow, IonText } from '@ionic/react';

interface EvaluationProps {
    formData: Array<{
        name: string;
        value: string;
        error: string;
        type: string;
        id: string;
      }>,
      getdata: (item: any) => void;
}

const Evaluation: React.FC<EvaluationProps> = ({ formData, getdata }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRating(Number(event.target.value));
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const evaluationData = {
            rating,
            comment
        };
        getdata(evaluationData);
    };

    return formData && (
        <>
        <IonRow>
            <IonText>Listes d'évaluation</IonText>
        </IonRow>
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

export default Evaluation;
