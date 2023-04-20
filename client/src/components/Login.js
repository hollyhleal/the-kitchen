// import React, { useState } from "react";

// function LoginForm(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
    
//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     }

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     }

//   function handleSubmit(event) {
//     event.preventDefault();

//     // check the username and password
//     if (username === "myusername" && password === "mypassword") {
//       // if the username and password are correct, set the isLoggedIn state to true
//       setIsLoggedIn(true);
//     } else {
//       // if the username and password are incorrect, display an error message or perform some other action
//       console.log("Invalid username or password");

//       // call the onLoginSuccess prop to trigger the button on another page component
//       props.onLoginSuccess();
//     }

//     return (
//       <>
//         {!isLoggedIn ? (
//           <LoginForm onLogin={handleLogin} />
//         ) : (
//           <Button onClick={props.onButtonClick} disabled={!isLoggedIn}>
//             Click me!
//           </Button>
//         )}
//       </>
//     );
//   }
// }

// export default LoginForm;
