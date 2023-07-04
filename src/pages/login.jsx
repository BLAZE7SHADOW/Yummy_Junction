import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalLogin } from "../../context/login-context";
import './login.css';


const Login = () => {

    const { loginAction, input, setInput, userToken } = useGlobalLogin();

    const navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate(-1)
        }
    })

    const dummyData = {
        username: 'kminchelle',
        password: '0lelplR'
    }

    const setInputUserName = (event) => {
        setInput({ username: event.target.value });
    }
    const setInputPassword = (event) => {
        setInput({ password: event.target.value });
    }

    return (
        <>
            <div className="login-body">
                <div className="img">
                    <div className="login-form">
                        <div className="login">
                            <h1>Login</h1>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Name"
                                autoCorrect="off" value={input.username} onChange={setInputUserName}
                            />
                            <input type="password" placeholder="Password" value={input.password} onChange={setInputPassword} />
                            <input type="submit" value="Login" onClick={loginAction} />
                            <input type="button" value="Click Here To Apply Dummy Data" onClick={() => setInput(dummyData)} />
                        </form>
                        <div className="remember-forget">
                            <div className="remember-me">
                                <input type="checkbox" name="" id="" /><span>Remember Me</span>
                            </div>
                            <div className="forget-password">
                                <NavLink>
                                    <p>Forget Password ?</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login;