import { useState } from 'react';
import './App.css';
import SingleChoiceQuestion from './Components/SingleChoiceQuestion';
import TextareaChoiceQuestion from './Components/TextareaChoiceQuestion';

function App() {
  const [userResponses, setUserResponses] = useState([])
  const [errors, setErrors] = useState({})

  const handleSelection = (question, response) =>{
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [question]: response,
    }))
    setErrors((prevError) => ({...prevError, [question]: ''}));
  }

  const handleSubmitAll = () => {
    const anyError = Object.values(userResponses).some(response => response === '');

    if (anyError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...Object.fromEntries(Object.entries(userResponses).map(([question, response]) => [question, response === '' ? 'Please select an option' : '']))
      }));
    } else {
      console.log('All user responses:', userResponses);
    }
  };

  console.log(userResponses)

  
  return (
    <div className="App">
        <div className="form">
          <div className="form-title">
            FORMULAIRES DE CONTRÔLE DE LA QUALITÉ DES ENSEIGNEMENTS
          </div>
          <div className="form-section">
            <section>
              <h4 className='section-title'>A. Informations générales</h4>
              <div className="form-section-content">
                <SingleChoiceQuestion 
                  question={"01. Nature de l’établissement de rattachement"}
                  propositions={['UNB', 'EPES']}
                  onSelection={handleSelection}
                />
                <TextareaChoiceQuestion 
                  question={"02. Dénomination de l’établissement de rattachement"}
                  onAnswer={(response) => handleSelection("02. Dénomination de l’établissement de rattachement", response)}
                />
                <SingleChoiceQuestion 
                  question={"03. Type d’EFR"}
                  propositions={["Faculté","Ecole","Chaire","Institut","Autres"]}
                  onSelection={handleSelection}
                />
                <TextareaChoiceQuestion 
                  question={"04. Dénomination de l’EFR:"}
                  onAnswer={(response) => handleSelection("04. Dénomination de l'EFR", response)}
                />
                <TextareaChoiceQuestion 
                  question={"05. Intitulé de la formation"}
                  onAnswer={(response) => handleSelection("05. Intitulé de la formation", response)}
                />

              </div>

            </section>

          </div>
          <div className="form-section">
            <section>
              <h4 className='section-title'>B. Critères de contrôle de la qualité de l’offre de formation</h4>
              <div className="form-section-content">
                <SingleChoiceQuestion 
                  question={"01. Etat de validation de l’offre de formation:"}
                  propositions={['OUI', 'NON']}
                  onSelection={handleSelection}
                />
                <SingleChoiceQuestion 
                  question={"02. Formulation des objectifs pédagogiques:"}
                  propositions={["OUI","NON"]}
                  onSelection={handleSelection}
                />
                <SingleChoiceQuestion 
                  question={"03. Traduction dans les objectifs de formation des compétences escomptées"}
                  propositions={["OUI","NON"]}
                  onSelection={handleSelection}
                />
                <SingleChoiceQuestion 
                  question={"Les infrastructures existent et sont adaptées"}
                  propositions={["OUI","NON"]}
                  onSelection={handleSelection}
                />
                <SingleChoiceQuestion 
                  question={"L’offre de formation est mise à jour comme prévu"}
                  propositions={["OUI","NON"]}
                  onSelection={handleSelection}
                />

              </div>

            </section>

          </div>
          <button className="submit" id='submit' onClick={handleSubmitAll}>Envoyer</button>
        </div>
    </div>
  );
}



export default App;
