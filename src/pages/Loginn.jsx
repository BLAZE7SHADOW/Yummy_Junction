import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import loginHandler from "../utils/store/services/loginServices";

const Loginn = () => {

    const loginToken = useSelector(store => store?.login?.loginToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginToken) {
            navigate(-1)
        }
    })



    return (
        <div className=" flex justify-center items-center bg-black/10">
            <div className='login-main pt-16 flex max-h-[400px] my-8 justify-center items-center text-sociogram bg-black/20 rounded-xl'>
                <div className="login-form-card lg:w-[30vw] xs:w-[400px] bg-secondary p-6 rounded-lg">
                    <h1 className={'text-center text-3xl pb-4'}>Login</h1>
                    <form onSubmit={loginHandler} className={'flex flex-col gap-3'}>
                        <label htmlFor="email" className={'flex flex-col'}>
                            Username
                            <input required type="text" name={'username'} id={'username'} placeholder={'@johndoe'} className={'rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white'} />
                        </label>
                        <label htmlFor="password" className={'flex flex-col'}>
                            Password
                            <input required type="password" name={'password'} id={'password'} placeholder={'*******'} className={'rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white'} />
                        </label>
                        <label className="checkbox flex gap-2 items-center cursor-pointer">
                            <input type="checkbox" name="remember" id="remember" className={'w-4 h-4'} />
                            Remember Me
                        </label>
                        <button type={'button'} className={'bg-transparent border-2 font-semibold p-3 rounded-lg hover:bg-black/30'} onClick={() => dispatch(loginHandler())}>Guest Mode</button>
                        <button type={'submit'} className={'bg-button p-3 rounded-lg text-white mb-10'}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Loginn;

