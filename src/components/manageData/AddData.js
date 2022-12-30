import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import "./ManageData.css"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddData = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://crud-backend-pl6i.onrender.com/api/data', data)
            .then(res => {
                if (res.data) {
                    toast("data added successfully !!!");
                    setTimeout(() => {
                        navigate("/", { replace: true });
                    }, 1500);
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


export default AddData;

