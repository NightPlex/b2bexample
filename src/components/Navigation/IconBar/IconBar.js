import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import "./../../../scss/generic.scss";

const iconbar = () => {
    return (
        <div className="iconbar-wrapper">
            <div className="d-inbl">
                <FaUserCircle />
            </div>
            <div className="d-inbl u-ml-1">
                <FaBars />
            </div>
        </div>
    );
}

export default iconbar;