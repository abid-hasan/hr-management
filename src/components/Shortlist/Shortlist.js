import React from 'react';
import './Shortlist.css';

const Shortlist = (props) => {
    const { shortlistings } = props;

    const totalReducer = (previous, employee) => previous + employee.salary;
    const totalSalary = shortlistings.reduce(totalReducer, 0);

    return (
        <div className="shortlist-container">
            <h2>Shortlist</h2>
            <ul>
                {
                    shortlistings.map(employee => <li>{employee.name}</li>)
                }
            </ul>
            <h4>Employee count: {shortlistings.length}</h4>
            <h4>Total Cost: ${totalSalary}</h4>
            <button className="add-button">Hire shortlisted employees</button>
        </div>
    );
};

export default Shortlist;