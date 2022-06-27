import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DataDetails = () => {
    const [dataD, setDataD] = useState({})
    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://mern-crud-mvc.herokuapp.com/api/data/${id}`);
            const record = await res.json();
            setDataD(record)
        }
        fetchData();
    }, [])
    
    const { _id, img, name, descriptions } = dataD
    // console.log(_id, img, name, descriptions)
    return (
        <div className="div22" key={_id}>

            <img  style={{maxHeight:"450px",width:"100%"}} src={img} alt="" />
            <p>{name}</p>
            <p>{descriptions}</p>
        </div>
    );
};

export default DataDetails;