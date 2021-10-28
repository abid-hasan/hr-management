import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Employee.css';

const Employee = (props) => {
    const { employee } = props;
    const { name, age, phone, email, salary, image } = employee;
    const { handleAddToShortlistings } = props;


    return (
        <div className="employee-card">
            <img className="card-image" src={image} alt="" />
            <h3>{name}</h3>
            <p><strong>Age:</strong> {age}Y</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Expected Salary:</strong> ${salary}</p>
            <button onClick={() => handleAddToShortlistings(employee)} className="add-button"><FontAwesomeIcon icon={faPlusCircle} /> Add to shortlist</button>
        </div>
    );
};

export default Employee;