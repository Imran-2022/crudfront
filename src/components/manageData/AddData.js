import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import "./ManageData.css"
const AddData = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://mern-crud-mvc.herokuapp.com/api/data', data)
            .then(res => {
                if (res.data) {
                    alert("data added successfully !!!");
                    reset()
                }
            })
    };

    return (
        <div >
            <p>Add a Data</p>
            <div className="update">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                    <input  {...register("descriptions")} placeholder="descriptions" />
                    <input {...register("img")} placeholder="img" />
                    <input type="submit" value="add Data" />
                </form>
            </div>
        </div>
    );
};


export default AddData;

