import React from 'react';
import Highscore from './Highscore';

function HighscoreList({ scores }) {
    return (
        <div className="highscore-list">
            {scores.map(score => <Highscore key={score.id} score={score} />)}
        </div>
    );
}

export default HighscoreList;
