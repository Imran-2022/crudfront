import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageData = () => {
    const [manageData, setManageData] = useState([])
    useEffect(() => {
        const url = "https://mern-crud-mvc.herokuapp.com/api/data"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setManageData(data.reverse())
            })
    }, [])

    const handleDelete = (id) => {

        if (true) {
            fetch(`https://mern-crud-mvc.herokuapp.com/api/data/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())// or res.text()) 
                .then(res => {
                    if (res.deletedCount === 1) {
                        toast(` deleted successfully`)
                        const newUser = manageData.filter(ab => ab._id != id);
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
                        <th className="hideth">id</th>
                        <th>name</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>

                {
                  manageData.length?  manageData.map((data, i) => {
                        const { _id, img, name } = data
                        return (
                            <tbody key={_id}>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td className="hideth">{_id}</td>
                                    <td>{name}</td>
                                    <td className="btnmanage"><Link to={`/data/update/${_id}`}>update</Link></td>
                                    <td className="btnmanage" onClick={() => handleDelete(_id)}>delete</td>
                                </tr>

                            </tbody>
                        )
                    }):<div >
                    <p>loading data from backend , wait ...........</p>
                </div>
                    // }).reverse()
                }
            </table>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ManageData;