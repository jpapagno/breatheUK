import { useState } from "react";
const Login = () => {

    const [userMail, setUserMail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {userMail, password}
        console.log({user})
    }




    return (  
        <div className="login">
            <h2>Login to an Account</h2>

<form onSubmit={handleSubmit}>
    <label>Username/Email</label>
    <input
    type="text"
    required
    value={userMail}
    onChange= {(e) => setUserMail(e.target.value)}>
    </input>

    <label>Password</label>
    <input
    type="password"
    required
    value={password}
    onChange= {(e) => setPassword(e.target.value)}>
    </input>
    <button>Login</button>
</form>
        </div>
    );
}
 
export default Login;