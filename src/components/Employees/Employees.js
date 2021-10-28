import React, { useEffect, useState } from 'react';
import './Employees.css';
import Employee from '../Employee/Employee';

const Employees = (props) => {
    const { handleAddToShortlistings } = props;

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('./employees.json')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);
    return (
        <div className="employee-container">
            {
                employees.map(employee => <Employee key={employee.id} employee={employee} handleAddToShortlistings={handleAddToShortlistings} />)
            }
        </div>
    );
};

export default Employees;