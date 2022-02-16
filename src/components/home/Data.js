import React, { useEffect, useState } from 'react';
import "./Data.css";
import { Link } from "react-router-dom";
const Data = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://mern-crud-operation.herokuapp.com/data");
            const record = await res.json();
            setData(record.reverse())
        }
        fetchData();
    }, [])
    // console.log(data)
    return (
        <div>
            <p>total number of data added : {data.length}</p>
            <div className="dataHome">
                {
                    data.map((data, index) => {
                        // console.log(index,data)
                        const { _id, img, name } = data
                        return (
                            <div className="div2" key={_id}>
                                <img src={img} alt="" />
                                <p>{name}</p>
                                <Link to={`/dataDetails/${_id}`}><p>details</p></Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Data;