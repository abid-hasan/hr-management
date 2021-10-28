import React, { useState } from 'react';
import './Main.css';
import Employees from '../Employees/Employees';
import Shortlist from '../Shortlist/Shortlist';

const Main = () => {
    const [shortlistings, setShortlistings] = useState([]);

    const handleAddToShortlistings = (employee) => {
        const newShortlistings = [...shortlistings, employee];
        setShortlistings(newShortlistings);
    }

    return (
        <div className="main">
            <Employees handleAddToShortlistings={handleAddToShortlistings} />
            <Shortlist shortlistings={shortlistings} />
        </div>
    );
};

export default Main;