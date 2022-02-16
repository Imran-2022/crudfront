import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageData = () => {
    const [manageData, setManageData] = useState([])
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch("http://localhost:8080/data");
    //         const record = await res.json();
    //         setManageData(record)
    //     }
    //     fetchData();
    // }, [])

    useEffect(()=>{
        const url="http://localhost:8080/data"
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            // setManageData(data.reverse())
            setManageData(data.reverse())
            // setUser(data)
        })
    },[])

    const handleDelete = (id) =>{
        // const proced= window.confirm("are you sure, you want to delete ?");

        if(true){
            fetch(`http://localhost:8080/data/${id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())// or res.text()) 
              .then(res => {
                  if(res.deletedCount===1)
                  {
                      alert(`User ${id} deleted successfully`)
                      const newUser = manageData.filter(ab=>ab._id !=id);
                      setManageData(newUser)
                  }
              })
        }
    }
    return (
        <div>
            <p>the number of users : {manageData.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>#no</th>
                        <th>id</th>
                        <th>name</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
           
            {
                manageData.map((data, i) => {
                    const { _id, img, name } = data
                    return (
                        <tbody key={_id}>
                            <tr>
                                <td>{i+1}</td>
                                <td>{_id}</td>
                                <td>{name}</td>
                                <td className="btnmanage"><Link to={`/data/update/${_id}`}>update</Link></td>
                                <td className="btnmanage"  onClick={()=>handleDelete(_id)}>delete</td>
                            </tr>
                        </tbody>
                    )
                })
                // }).reverse()
            } 
            </table>
        </div>
    );
};

export default ManageData;