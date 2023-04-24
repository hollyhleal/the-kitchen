import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../utils/mutations";
import Auth from "../utils/Auth";
import { redirect } from "react-router-dom"; // Import Redirect
import { toast } from "react-toastify";

const Signup = ({ showModal, setShowModal }) => {
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
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
      if (Auth.login) {
        toast.success("Signed up successfully!");
      }
      // history.push("/profile"); // Navigate the user to their profile page
      console.log(data);
      redirect("/profile");
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  // if (redirectToProfile) {
  //     return <redirect to="/profile" />;
  // }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up For An Account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form classname="space-y-6" onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-black-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  onChange={handleInputChange}
                  value={userFormData.name}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="name"
                  placeholder="Sam Smith"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-black-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="email"
                  placeholder="sam@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-black-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="password"
                  placeholder="********"
                  minLength="5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium   text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
