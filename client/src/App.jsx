import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/api';
import Question from './Question';
import './App.css'

const App = () => {
  const [easy, setEasy] = useState('');
  const [medium, setMedium] = useState('');
  const [hard, setHard] = useState('');
  const [error, setError] = useState('');
  const [paper, setPaper] = useState([]);
  const [click, setClick] = useState(false);


  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    if (value <= 100) {
      setter(value);
    }
  };


  const apiCall = async () => {
    const queryParams = `easy=${easy}&medium=${medium}&hard=${hard}`;
    const apiUrl = `https://reelo-backend-internship-assignment-backend.vercel.app/paper?${queryParams}`;
    console.log(apiUrl);
    const data = await fetchData(apiUrl);
    setClick(false);
    setPaper(shuffleData(data));
  }

  const shuffleData = (data) => {
    const newData = [...data];
    for (let i = newData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newData[i], newData[j]] = [newData[j], newData[i]];
    }
    return newData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaper([]);
    const sum = parseInt(easy) + parseInt(medium) + parseInt(hard);
    if (!easy || !medium || !hard) {
      console.log("ok");
      setError('Please fill all Input');
    }
    else if (sum !== 100) {
      setError('The sum of Easy, Medium, and Hard values must be equal to 100.');
      return;
    } else {
      setError('');
      setClick(true);
      apiCall();
    }
  };
  return (
    <div>
      <h1>Question Paper Generator application</h1>
      <div className='main'>
        <div className='left'>
          <form onSubmit={handleSubmit}>
            <label className="green-text">
              Easy:
              <input
                type="text"
                value={easy}
                onChange={(e) => handleInputChange(e, setEasy)}
                placeholder='Enter percentage'
              />
            </label>
            <br />
            <label className='yellow-text'>
              Medium:
              <input
                type="text"
                value={medium}
                onChange={(e) => handleInputChange(e, setMedium)}
                placeholder='Enter percentage'
              />
            </label>
            <br />
            <label className='red-text'>
              Hard:
              <input
                type="text"
                value={hard}
                onChange={(e) => handleInputChange(e, setHard)}
                placeholder='Enter percentage'
              />
            </label>
            <br />
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
          <div className='details'>
            <p>Name = Subham Swarup Pradhan</p>
            <p>Number = 9861440874</p>
            <p>Email = subhamswaruppradhan2580@gmail.com</p>
          </div>
        </div>
        <div className='right'>
          {
            paper.length > 0 ? (
              <div>
                <h2>Question Paper</h2>
                <ul>
                  {paper.map((item, index) => (
                    <li key={index}>
                      <Question data={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              click && (
                <div className='loader'></div>
              )
            )
          }
        </div>
      </div>

    </div>

  );
};

export default App;
