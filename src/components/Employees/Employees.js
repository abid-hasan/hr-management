import React, { useEffect, useState } from 'react';
import './Employees.css';
import Employee from '../Employee/Employee';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('./employees.json')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);
    return (
        <div className="employee-container">
            {
                employees.map(employee => <Employee key={employee.id} employee={employee} />)
            }
        </div>
    );
};

export default Employees;