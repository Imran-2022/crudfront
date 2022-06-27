import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateData = () => {
    const navigate = useNavigate();
    const [update, setUpdate] = useState({ name: "", img: "", descriptions: "" });
    const { dataID } = useParams()
    console.log(dataID)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://mern-crud-mvc.herokuapp.com/api/data/${dataID}`);
            const record = await res.json();
            setUpdate(record)
        }
        fetchData();
    }, [])
    const { img, name, descriptions } = update;

    // handle update changes here  -
    const handleUpdate = (e) => {
        const url = `https://mern-crud-mvc.herokuapp.com/api/data/${dataID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update),
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    toast('Data Updated')
                    setTimeout(() => {
                        navigate("/manageData", { replace: true });
                    }, 1500);
                }
            })

        e.preventDefault()
    }

    // console.log(update)
    const handleNameChange = (e) => {
        const updatedName = e.target.value;
        const updated = { name: updatedName, img: update.img, descriptions: update.descriptions }
        setUpdate(updated)
    }

    const handleImagesChange = (e) => {
        const updatedImage = e.target.value;
        const updated = { name: update.name, img: updatedImage, descriptions: update.descriptions }
        setUpdate(updated)
    }

    const handleDescriptionsChange = (e) => {
        const updatedDescriptions = e.target.value;
        const updated = { name: update.name, img: update.img, descriptions: updatedDescriptions }
        setUpdate(updated)
    }

    return (
        <div>
            <p>update a data</p>
            <div className="update">

                <form onSubmit={handleUpdate}>
                    <input type="text" onChange={handleNameChange} value={name || ""} />
                    <input type="text" onChange={handleDescriptionsChange} value={descriptions || ""} />
                    <input type="text" onChange={handleImagesChange} value={img || ""} />
                    <input type="submit" value="update" />
                    <ToastContainer
                        position="top-right"
                        autoClose={500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateData;
