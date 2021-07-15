import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirestName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        setFirestName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <div>
            <table>
                <form onSubmit={createUser} ></form>
                <tr>
                    <td>First Name:</td>
                    <td>
                        <input type="text" onChange={ (e) => setFirestName(e.target.value) } value={firstName} ></input>
                    </td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>
                        <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName} ></input>
                    </td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>
                        <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email} ></input>
                    </td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>
                        <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} ></input>
                    </td>
                </tr>
                <tr>
                    <td>Confirm Password:</td>
                    <td>
                        <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value={confirmPassword} ></input>
                    </td>
                </tr>                
            </table>
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