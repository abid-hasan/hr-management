import React from 'react';
import './Shortlist.css';

const Shortlist = () => {
    return (
        <div className="shortlist-container">
            <h2>Shortlist</h2>
            <ul>
                <li>Leanne Graham</li>
            </ul>
            <h4>Employee count: 1</h4>
            <h4>Total Cost: $1000</h4>
            <button className="add-button">Hire shortlisted applicants</button>
        </div>
    );
};

export default Shortlist;