import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HighscoreList from './HighscoreList';
import SubmissionForm from './SubmissionForm';

function App() {
    const [highscores, setHighscores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/highscores/').then(response => {
            setHighscores(response.data);
        });
    }, []);

    const handleNewSubmission = (data) => {
        axios.post('http://localhost:8000/api/highscores/', data).then(response => {
            setHighscores([...highscores, response.data]);
        }).catch(error => {
            console.error("Error submitting highscore:", error);
        });
    };

    return (
        <div className="app">
            <h1>Guitar Hero Highscores</h1>
            <SubmissionForm onSubmit={handleNewSubmission} />
            <HighscoreList scores={highscores} />
        </div>
    );
}

export default App;
