import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import gameData from './gameData/data.json';

const Results = () => {
  const [games, setGames] = useState([]);
  const [resultsInput, setResultsInput] = useState([]);
  const [submittedResults, setSubmittedResults] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  useEffect(() => {
    setGames(gameData);
  }, []);

  useEffect(() => {
    const submittedDataRef = ref(getDatabase(), 'submittedData');
    onValue(submittedDataRef, (snapshot) => {
      const data = snapshot.val();
      setSubmittedData(data || {});
    });
  }, []);

  useEffect(() => {
    const resultsRef = ref(getDatabase(), 'results');
    onValue(resultsRef, (snapshot) => {
      const data = snapshot.val();
      setResultsInput(data || []);
      setSubmittedResults(!!data);
    });
  }, []);

  const calculatePoints = (bets, results) => {
    let points = 0;
    bets.forEach((bet, index) => {
      const result = results[index];
      if (result && bet.score === result) {
        points += 3;
      } else if (result && bet.bet === (result.split(':')[0] === result.split(':')[1] ? 'X' : result.split(':')[0] > result.split(':')[1] ? '1' : '2')) {
        points += 1;
      }
    });
    return points;
  };

  const handleResultChange = (index, result) => {
    setResultsInput(prevResults => {
      const updatedResults = [...prevResults];
      updatedResults[index] = result;
      return updatedResults;
    });
  };

  const handleSubmitResults = () => {
    set(ref(getDatabase(), 'results'), resultsInput)
      .then(() => {
        setSubmittedResults(true);
        alert('Results submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting results:', error);
        alert('An error occurred while submitting the results. Please try again.');
      });
  };
  return (
    <div>
      <h2>Enter Results:</h2>
      {games.map((game, index) => (
        <div key={index}>
          <span>{game.home} vs {game.away}: </span>
          <input
            type="text"
            placeholder="1:1"
            value={resultsInput[index] || ''}
            onChange={(e) => handleResultChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmitResults}>Submit Results</button>

      {submittedResults && (
        <div>
          <h2>Points Table:</h2>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(submittedData).map((user) => (
                <tr key={user}>
                  <td>{user}</td>
                  <td>{calculatePoints(Object.values(submittedData[user]), resultsInput)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Results;
