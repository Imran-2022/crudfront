import React from 'react';
import Navigation from './components/navigation/Navigation';
import {Routes, Route,} from "react-router-dom";
import Data from './components/home/Data';
import Home from './components/home/Home';
import AddData from './components/manageData/AddData';
import ManageData from './components/manageData/ManageData';
import DataDetails from './components/manageData/DataDetails';
import UpdateData from './components/manageData/UpdateData';
function AppRoutes() {
    const style = {
        width: '80%',
        margin: '20px auto'
    }
    return (
        <div style={style}>
                <Navigation />
                <Routes>
                    <Route path="/data" element={<Data />}></Route>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/addData" element={<AddData />}></Route>
                    <Route path="/manageData" element={<ManageData />}></Route>
                    <Route path="/dataDetails/:id" element={<DataDetails />}></Route>
                    <Route path="/data/update/:dataID" element={<UpdateData />}></Route>
                </Routes>
        </div>
    );
}

export default AppRoutes;
