import React from 'react';
import "./Navigation.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <p>React Crud Operations </p>
            <nav className='navigation'>
                <NavLink className="navlink" to="/">Home</NavLink> →{" "}
                <NavLink className="navlink" to="addData">AddData</NavLink> →{" "}
                <NavLink className="navlink" to="manageData">ManageData</NavLink>
            </nav>
        </div>
    );
};

export default Navigation;