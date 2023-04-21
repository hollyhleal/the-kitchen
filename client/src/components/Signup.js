import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../utils/mutations";
import Auth from "../utils/Auth";
import { redirect } from "react-router-dom"; // Import Redirect




const Signup = ({ showModal, setShowModal }) => {
    const [userFormData, setUserFormData] = useState({ name: "", email: "", password: "" });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    // const [redirectToProfile, setRedirectToProfile] = useState(false); // Add redirectToProfile state variable

    const [createUser] = useMutation(ADD_PLAYER);
    // const history = useHistory(); // Initialize useHistory


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // };
        
        try {
            const { data } = await createUser({ variables: { ...userFormData } });
            Auth.login(data.token);
            // history.push("/profile"); // Navigate the user to their profile page
            console.log(data);
           redirect("/profile")
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        };

        setUserFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    // if (redirectToProfile) {
    //     return <redirect to="/profile" />;
    // }

    return (
        <>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowModal(false)}></div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                {showAlert && (
                                    <div className="bg-red-500 text-white px-3 py-3 rounded mb-4">
                                        Something went wrong with your signup!
                                    </div>
                                )}
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Sign Up</h3>
                                <form onSubmit={handleFormSubmit}>
                                <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                        <input
                                            type="name"
                                            name="name"
                                            onChange={handleInputChange}
                                            value={userFormData.name}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleInputChange}
                                            value={userFormData.email}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleInputChange}
                                            value={userFormData.password}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            placeholder="Enter your password"
                                            minLength="5"
                                            required
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Sign Up
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};
export default Signup;