import React from 'react';

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>
}

const Welcome: React.FC<Props> = ({ setStatus }) => {
  return (
    <div className='welcome-wrapper'>
      <div className='welcome-div'>
        <h1>Bienvenid@</h1>
        <p>El siguiente test te va a servir para descubrir cuál es tu <b>estado emocional presente</b>. A través de una serie de preguntas, podrás evaluar <b>cómo te sientes en este momento</b> y cómo están afectando tus emociones tu día a día.</p>
        <p>Al final del cuestionario recibirás un informe en forma de <b>gráfico</b>.</p>
        <small><i>Es importante tener en cuenta que este test es solo una herramienta de autodiagnóstico y no debe tomarse como una evaluación profesional o un sustituto de asesoramiento psicológico. Sin embargo, puede ser una forma útil de identificar patrones o problemas emocionales que puedan requerir más atención y apoyo. Recuerda que es normal tener altibajos emocionales y es importante aprender a manejarlos de manera saludable.<br/><br/>Esta página no registra los datos de las respuestas.</i></small>
        <button type="button" onClick={() => setStatus('taking-test')}>Empezar</button>
      </div>
      <div className="creative-commons">
        <p>2023 | Martina Bastida, Laia Casanovas, Ari Gotta i Francesc Vila | TAC | Pedagogía UAB</p>
        <img src="/creative_commons.png" width="140px"></img>
      </div>
    </div>
  )
}

export default Welcome;
