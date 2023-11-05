import React, { useState } from 'react';

const SingleChoiceQuestion = ({question, propositions, onSelection}) =>{

    const [selectedOpt, setSelectedOpt] = useState('');
    
    const handleOptChange = (e)=> {
        const value = e.target.value
        setSelectedOpt(value);
        onSelection(question, value);
    }


    console.log(selectedOpt)

    return(
        <div>
            <h3 className='question'>{question}</h3>
            { propositions.map((opt, index) => (
                <div key={index}>
                    <label className='proposition'> 
                        <input 
                            type="radio" name={opt}
                            checked={selectedOpt===opt} 
                            value={opt}
                            onChange={handleOptChange}
                        />
                        {opt}
                    </label>
                </div>
            ))}
        </div>
    )

}

export default SingleChoiceQuestion;