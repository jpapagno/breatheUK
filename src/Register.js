import { useState } from "react";

const Register = () => {
 
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [postcode, setPostcode] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {firstName, lastName, email, 
            password, phone, postcode}
        console.log({user})
    }

 
    return ( 

        <div className="register">
            <h2>Register for an Account</h2>
<form onSubmit={handleSubmit}>
    <label>First Name* </label>
    <input 
    type="text"
    required
    value={firstName}
    onChange = {(e) => setFirstName(e.target.value)}>
    </input>
    <label>Last Name* </label>
    <input 
    type="text"
    required
    value={lastName}
    onChange = {(e) => setLastName(e.target.value)}>
    </input>
    <label>Email* </label>
    <input 
    type="email"
    required
    value={email}
    onChange = {(e) => setEmail(e.target.value)}>
    </input>
    <label>Password* </label>
    <input 
    type="password"
    required
    value={password}
    onChange = {(e) => setPassword(e.target.value)}>
    </input>
    <label>Phone (Optional) </label>
    <input 
    type="phone"
    value={phone}
    onChange = {(e) => setPhone(e.target.value)}>
    </input>
    <label>Postcode (Optional) </label>
    <input 
    type="postcode"
    value={postcode}
    onChange = {(e) => setPostcode(e.target.value)}>
    </input>
    <button>Create Account</button>
</form>
        </div>

     );
}
 
export default Register;