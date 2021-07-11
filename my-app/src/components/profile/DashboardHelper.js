import React from 'react';

export const DashboardHelper = (props) => {
    return (
        <li className="listele font-italic mb-0 row">
            <span className="left col-sm-4"><a href="#">{props.title}</a></span>
            <span className="statis col-sm-4 text-center">Status: In Progress</span>
            <span className="text-right col-sm-4">{props.date}</span>
            <span className="text-right col-sm-4">{props.duration}</span>
        </li>
    );
};
