import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import loginHandler from "../utils/store/services/loginServices";

const Login = () => {

    const loginToken = useSelector(store => store?.login?.loginToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginToken) {
            navigate(-1)
        }
    })



    return (
        <>
            <div className="login-body w-full bg-pink-400">
                <div className="img">
                    <div className="login-form">
                        <div className="login">
                            <h1>Login</h1>
                        </div>
                        <button onClick={() => dispatch(loginHandler())}>LOGIN AS GUEST</button>
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