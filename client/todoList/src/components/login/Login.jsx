import React, { useState } from "react";
import publicAxios from "../../config/publicAxios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleGetValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const response = await publicAxios.post("/login", user);
            localStorage.setItem("token", response.data.token);
            alert(response.data.message);
            navigate("/todo");
        } catch (error) {
            alert(error.response.data.message);
        }

    };

    return (
        <>
            <div>
                <h1>Login</h1>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" onChange={handleGetValue} />
                    <br />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" name="password" onChange={handleGetValue} />
                </div>
                <div>
                    <button onClick={handleLogin}>Login</button>

                </div>
            </div>
        </>
    );
}

export default Login;
