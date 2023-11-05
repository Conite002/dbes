import React, { useState } from 'react';

const TextareaChoiceQuestion = ({ question, onAnswer }) => {
    const [answer, setAnswer] = useState('');

    const handleAnswerChange = (e) =>{
        setAnswer(e.target.value)
        onAnswer(e.target.value)
    }

    return (
        <div className='textarea-choice'>
            <h3 className='question'>{question}</h3>
            <textarea  className='textarea' value={answer}  rows="2" onChange={handleAnswerChange} placeholder='Votre reponse'/>
        </div>
    )
}

export default TextareaChoiceQuestion;