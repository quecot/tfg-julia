import React, { useEffect, useState } from "react"
import Results from "./components/results";
import Survey from "./components/survey"
import Welcome from "./components/welcome";

function App() {
  const [status, setStatus] = useState<string>('start');
  const [results, setResults] = useState<any>();

  return (
    <div className="App">
      { status === 'start' ? <Welcome setStatus={setStatus}/> 
        : status === 'taking-test' ? <Survey setStatus={setStatus} setResults={setResults}/>
        : <Results setStatus={setStatus} results={results[0].data}/>
      }
    </div>
  )
}

export default App
