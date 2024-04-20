import { useEffect, useState } from 'react'
import './App.css'
import { KEY } from './util';
import QuizContainer from './Quiz-container';

function App() {
  const [data, setData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    fetch("https://quizapi.io/api/v1/questions", {
      headers: {
        "X-Api-Key": KEY,
      },
      // the default method is "GET"
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        res.json().then((data) => setData(data));
      })
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <>
      <div>
        Welcome
        <button onClick={() => setIsAuthenticated(true)}>Start</button>
      </div>
      {isAuthenticated && <QuizContainer data={data}/>}
    </>
  )
}

export default App;
