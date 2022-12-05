import React, {useState} from 'react';
import '../../App.css';

function AddDestination() {
    const [newData, setNewData] = useState({
        src: "",
        text: "",
        label: ""
    });


    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3000/destinations", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        });
    }

    function handleChange(event){
        setNewData({
            ...newData,
            [event.target.id]: event.target.value
        })
    }

    return (
        <React.Fragment>
            <div className = "message-input">
                <h4>Kindly fill in the form below to add a new Destination:</h4>
                <form id="messageForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Image Source:</label>
                        <input onChange={handleChange} value={newData.src} type="text" className="form-control" id="src" aria-describedby="src" placeholder='Enter the image address...'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Destination Description:</label>
                        <textarea onChange={handleChange} value={newData.text} className="form-control" id="text" rows="3" placeholder='Enter the destination description...'></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Label:</label>
                        <input onChange={handleChange} value={newData.label} type="text" min="0" className="form-control" id="label" aria-describedby="label" placeholder='Enter the destination name...'/>
                    </div>
                    
                    <button type="submit" id = "messageButton" className="btn btn-primary">Add Destination</button>
                </form>
            </div>
            
        </React.Fragment>
    )
}

export default AddDestination;