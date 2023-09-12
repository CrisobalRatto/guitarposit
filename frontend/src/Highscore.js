import React from 'react';

function Highscore({ score }) {
    return (
        <div className="highscore">
            <h2>{score.title}</h2>
            <p><strong>Song:</strong> {score.song_name}</p>
            {score.youtube_link && (
                <p><strong>YouTube:</strong> <a href={score.youtube_link} target="_blank" rel="noopener noreferrer">Link</a></p>
            )}
            <p>{score.description}</p>
        </div>
    );
}

export default Highscore;
