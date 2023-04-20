import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";


const Signup = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [createUser] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        };
        try {
            const { data } = await createUser({ variables: { ...userFormData } });
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        };

        setUserFormData({
            email: '',
            password: '',
        });
    };
    
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Sign up</h2>
                    {showAlert && (
                        <div className="bg-red-500 text-white p-2 rounded mb-4">
                            Something went wrong with your signup!
                        </div>
                    )}
                    <form onSubmit={handleFormSubmit} noValidate className={!validated && 'was-validated'}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm mb-1">Email</label>
                            <input type="email" id="email" name="email" value={userFormData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded-md text-sm" />
                            <div className="invalid-feedback">Please provide a valid email.</div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm mb-1">Password</label>
                            <input type="password" id="password" name="password" value={userFormData.password} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded-md text-sm" />
                            <div className="invalid-feedback">Please provide a valid password.</div>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">Sign up</button>
                    </form>
                </div>
            </div>
        </>
)

};
export default Signup;