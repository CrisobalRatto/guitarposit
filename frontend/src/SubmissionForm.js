import React, { useState } from 'react';

function SubmissionForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        title: "",
        song_name: "",
        youtube_link: "",
        description: ""
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div>
                <label>Song Name: </label>
                <input name="song_name" value={formData.song_name} onChange={handleChange} />
            </div>
            <div>
                <label>YouTube Link (optional): </label>
                <input name="youtube_link" value={formData.youtube_link} onChange={handleChange} />
            </div>
            <div>
                <label>Description: </label>
                <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubmissionForm;
