import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateData = () => {
    const [update, setUpdate] = useState({ name: "", img: "", descriptions: "" });
    const { dataID } = useParams()
    console.log(dataID)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:8080/data/${dataID}`);
            const record = await res.json();
            setUpdate(record)
        }
        fetchData();
    }, [])
    const { _id, img, name, descriptions } = update;
    // console.log(_id, img, name, descriptions)

    // handle update changes here  -
    const handleUpdate =(e) => {
        const url =`http://localhost:8080/data/${dataID}`;
        fetch(url,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update),
        })
        .then(response => response.json())
        .then(result=>{
            if(result.modifiedCount>0){
                alert('Updated')
                setUpdate({})
            }
        })

        e.preventDefault()
    }

    // console.log(update)
    const handleNameChange=(e) => {
        const updatedName=e.target.value;
        const updated={name:updatedName,img:update.img,descriptions:update.descriptions}
        setUpdate(updated)
        // console.log(updatedUser)
        // console.log(e.target.value)
    }

    const handleImagesChange =(e) => {
        const updatedImage=e.target.value;
        const updated={name:update.name,img:updatedImage,descriptions:update.descriptions}
        setUpdate(updated)
    }

    const handleDescriptionsChange=(e) => {
        const updatedDescriptions=e.target.value;
        const updated={name:update.name,img:update.img,descriptions:updatedDescriptions}
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
                </form>
            </div>
        </div>
    );
};

export default UpdateData;
