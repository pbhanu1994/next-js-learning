import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const AddActivity = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: "",
        duration: ""
    });

    const handleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value}));
    }

    const addData = () => {
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                name: data.name,
                duration: data.duration
            }
        })
    }

    return (
        <div className="add-activity">
            <div className="input-selection">
                <p>Activity</p>
                <input type="text" onChange={handleChange} name="name" placeholder="Activity Name.." value={data.name}  />
            </div>
            <div className="input-selection">
                <p>Duration</p>
                <input type="text" onChange={handleChange} name="duration" placeholder="Duration Name.." value={data.duration}  />
            </div>
            <br />
            <button onClick={addData}>Add Activity</button>
        </div>
    )
}

export default AddActivity;