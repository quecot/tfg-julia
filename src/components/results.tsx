import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
// @ts-ignore
import RadarGraph from './radar_graph';

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>
  results: any
}

const emotionDefinitions = new Map();

emotionDefinitions.set("Alegria", 'La alegría es una emoción "positiva", que se expresa como un estado de bienestar y satisfacción respecto a uno mismo y/o las condiciones generales de la vida. Su grado más sutil se manifiesta como serenidad (un estado regular de calma, quietud y equilibrio), mientras que el superior adopta la forma de éxtasis (una de las experiencias humanas de mayor exaltación del estado de ánimo y que ha sido adoptada incluso por textos místicos de distintos credos).')
emotionDefinitions.set("Sorpresa", 'La sorpresa es una emoción cuya naturaleza tiende a ser considerada neutra, y que supone una reacción ante circunstancias cambiantes e imprevisibles que se ubican en el entorno inmediato. Según su grado, el más leve sería la distracción, un estado de ligera retención atencional; y el más intenso sería el asombro, que implica una absoluta proyección de la conciencia ante un suceso subjetivamente abrumador (para bien o para mal).')
emotionDefinitions.set("Miedo", 'El miedo es una reacción básica, universal e instintiva; considerada como tal en la práctica totalidad de las tipologías sobre emoción que han prosperado a lo largo de la historia. En su grado más sutil se expresa como aprensión (una incertidumbre preñada de expectativa pesimista) y en el más alto nivel se convierte en un auténtico terror o pavor (un estado que suele desplegar conductas de lucha o huida). El miedo es una reacción adaptativa ante las amenazas presentes en el entorno.')
emotionDefinitions.set("Tristeza", 'La tristeza es una respuesta emocional que depende de la pérdida, que se expresa como zozobra y nos permite obtener apoyo social a partir de la activación de las neuronas espejo de quienes la observan. El grado más leve es el aislamiento, una tendencia a la retirada de las actividades compartidas; y el más grave es la depresión, resultado de pequeñas pérdidas acumulativas que exacerban el pesar original.')
emotionDefinitions.set("Ira", 'La ira es un estado que surge como respuesta directa a una afrenta, especialmente cuando se atribuye a la voluntad clara de un tercero, siendo este un elemento perceptivo de gran relevancia para su aparición. En su forma más suave adopta la forma de un simple enfado (desacuerdo respecto a otra persona en sus palabras o sus maneras) y en la más extrema se convierte en furia (bajo la que suelen llevarse a cabo actos impulsivos).')
emotionDefinitions.set("Anticipación", 'La anticipación supone el reverso de la sorpresa, esto es, la articulación de nítidas expectativas sobre el discurrir del futuro. El perfil más bajo de esta emoción es el interés, que implica un grado moderado de atracción hacia un objeto o estímulo particular, y el más alto es la vigilancia (un nivel superlativo de focalización atencional, que además perdura durante largos periodos de tiempo y consume muchos recursos cognitivos).')
emotionDefinitions.set("Confianza", 'La confianza es una emoción esencial para las personas, la cual implica la creencia firme de que se puede actuar sin peligro de perjuicio o daño. Cuando está atenuada adopta la forma de aceptación, una integración sincera de los hechos vividos en la narrativa de la propia experiencia. Al inflamarse deviene admiración, con la que se expresa una total exaltación del aprecio que se proyecta sobre una persona o cosa.')
emotionDefinitions.set("Asco", 'El asco o aversión es una emoción sugerente de rechazo, y de una voluntad cruda y deliberada de evitación. En sus límites tenues se expresa como aburrimiento (o ausencia evidente de interés), mientras que en los más intensos deviene aborrecimiento. Este último se traduce en un empecinamiento por mantener la distancia física o psicológica respecto a un elemento que se juzga como indeseable.')

const Results: React.FC<Props> = ({ setStatus, results }) => {
  const getResults = (results: any) => {
    const groupedResults: any = {};
    results.forEach((r: any) => {
      const name: string = r.name.substring(0, r.name.length - 1);
      if (Object.keys(groupedResults).includes(name)) {
        groupedResults[name].value = (parseInt(groupedResults[name].value) + parseInt(r.value)).toString();
      } else {
        groupedResults[name] = { name: name, value: r.value};
      }
    })
    return groupedResults; 
  };

  const getDefinition = (name: string) => {
    return emotionDefinitions.get(name);
  }

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])
  
  
  const groupedResults = getResults(results);
  const mainResults = Object.values(groupedResults).sort((a: any, b: any) => (parseInt(a.value) < parseInt(b.value) ? 1 : -1)).slice(0, 2);

  return (
    <div className='results-div'>
      <h1>Resultados</h1>
      <p>A continuación se muestran los resultados:</p>
      <RadarGraph className="radar-graph" results={groupedResults} />
      <p>Tus emociones más predominantes <b>en este momento</b>:</p>
      { mainResults.map((r: any) => <p><b>{r.name}:</b> {getDefinition(r.name)}</p>) }
      <small><i>Nota:</i> Las definiciones de las emociones siguen el modelo de la 'Rueda de las Emociones' de Plutchik (1980) y se han adaptado de <a href="https://psicologiaymente.com/psicologia/rueda-emociones-robert-plutchik">este artículo</a>.</small>
      <button id="reset-button" type="button" onClick={() => setStatus('start')}>Volver a empezar</button>
    </div>
  )
}

export default Results;
