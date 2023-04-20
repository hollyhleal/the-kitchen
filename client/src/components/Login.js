import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    // mutation for login of user 
    const [loginUser] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        };

        try {
            const { data } = await loginUser({ variables: { ...userFormData } });

            Auth.login(data.login.token);
            console.log('FORM SUBMIT', data);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        };

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (



        <>
        
        
        </>
    )

    
}
export default Login;