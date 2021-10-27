import React from 'react';
import './Main.css';
import Employees from '../Employees/Employees';
import Shortlist from '../Shortlist/Shortlist';

const Main = () => {
    return (
        <div className="main">
            <Employees />
            <Shortlist />
        </div>
    );
};

export default Main;