import React, {useState} from 'react';

const Form = () => {
    //Inputs
    const [firstName, setFirestName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    //Errors
    const [firstNameError, setFirestNameError] = useState("First name is required!");
    const [lastNameError, setLastNameError] = useState("Last name is required!");
    const [emailError, setEmailError] = useState("Email is required!");
    const [passwordError, setPasswordError] = useState("Password is required!");
    const [confirmPasswordError, setConfirmPasswordError] = useState("Confirm password is required!");
    

    const handleFirstName = (e) => {
        setFirestName(e.target.value);
        if(e.target.value.length < 1) {
            setFirestNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirestNameError("First Name must be 2 characters or longer!");
        }
        else {
            setFirestNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required!");
        } 
        else if(e.target.value.length < 8) {
            setConfirmPasswordError("Confirm Password must be 8 characters or longer!");
        }
        else if (e.target.value !== password) {
            setConfirmPasswordError("Password and Confirm Password must match");
        }
        else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        setFirestName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    }

    return (
        <div>
            <form onSubmit={createUser} >
                {
                    hasBeenSubmitted?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
                }
                <table>
                    <tr>
                        <td>First Name:</td>
                        <td>
                            <input type="text" onChange={handleFirstName} value={firstName} ></input>
                        </td>
                        <td>
                            {
                                firstNameError ?
                                <p style={{color:'red'}}>{ firstNameError }</p> :
                                ''
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>
                            <input type="text" onChange={handleLastName} value={lastName} ></input>
                        </td>
                        <td>
                            {
                                lastNameError ?
                                <p style={{color:'red'}}>{ lastNameError }</p> :
                                ''
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>
                            <input type="email" onChange={handleEmail} value={email} ></input>
                        </td>
                            {
                                    emailError ?
                                    <p style={{color:'red'}}>{ emailError }</p> :
                                    ''
                            }
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>
                            <input type="password" onChange={handlePassword} value={password} ></input>
                        </td>
                            {
                                passwordError ?
                                <p style={{color:'red'}}>{ passwordError }</p> :
                                ''
                            }
                    </tr>
                    <tr>
                        <td>Confirm Password:</td>
                        <td>
                            <input type="password" onChange={handleConfirmPassword} value={confirmPassword} ></input>
                        </td>
                            {
                                confirmPasswordError ?
                                <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                                ''
                            }
                    </tr><tr>
                        <td></td>
                        <td>
                            <input type="submit" value="Submit" ></input>
                        </td>
                    </tr>                
                </table>
            </form>
            <section>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </section>
        </div>
    )
}

export default Form;