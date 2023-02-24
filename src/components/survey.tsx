import React from "react";
import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.css";
import "../index.css";
import { preguntes } from "../preguntes"

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>
  setResults: React.Dispatch<React.SetStateAction<any>>
}

StylesManager.applyTheme("defaultV2");
const SurveyComponent: React.FC<Props> = ({setStatus, setResults}) => {
  const survey = new Model(preguntes);

  const handleSubmit = () => {
    const data = survey.getPlainData()
    if (data[0].data!.length === preguntes.elements[0].rows.length) {
      setResults(data);
      setStatus('results');
    } else {
      alert('Por favor, responde todas las preguntas para ver los resultados.')
    }
  }

  return (
  <div className="survey">
    <Survey model={survey}/>
    <button type="button" onClick={handleSubmit}>Ver resultados</button>
  </div>
  );
}
export default SurveyComponent;

