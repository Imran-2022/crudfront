import React from 'react';
import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <p>React Crud Operations </p>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="addData">AddData</Link> |{" "}
                <Link to="manageData">ManageData</Link>
            </nav>
        </div>
    );
};

export default Navigation;