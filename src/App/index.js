import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import './App.scss';
import getJoke from '../Helpers/Data/jokeData';

function App() {
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const getAnotherJoke = () => {
    getJoke()
      .then((jokes) => {
        setSingleJoke(jokes);
      });
  };

  const handleClick = () => {
    if (showPunchline) {
      setShowPunchline(false);
      getAnotherJoke();
    } else {
      setShowPunchline(true);
    }
  };

  useEffect(() => {
    getAnotherJoke();
  }, []);

  return (
    <div className='App'>
      <div>
        <Card
        className='jokeCard'
        body style={{ backgroundColor: '#fff' }}>
          <h2>Yall wanna hear a joke?!</h2>
          <p>{singleJoke.setup}</p>
          <p>{showPunchline && singleJoke.punchline}</p>
           <Button color="dark" onClick={handleClick}>
            {showPunchline ? 'Get New Joke' : 'Show the Punchline'}
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default App;
