import React from 'react';
import './index.css';

const Coursescard = (props) => {
    const { CoursesListData } = props;

    return (
        <li className='main-background-service'>
            <h1>{CoursesListData.heading}</h1>
        </li>
    );
};

export default Coursescard;

