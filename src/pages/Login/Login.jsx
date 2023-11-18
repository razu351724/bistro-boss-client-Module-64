import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers.jsx/AuthProvider';
import { Link } from 'react-router-dom';
import img from '../../assets/others/authentication2.png'

const Login = () => {
    const captchaRaf = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const {signIn} = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password, captcha)
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRaf.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
            // alert('Captcha Matched');
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    <img src={img} className='w-full' alt="#" />
                </div>
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRaf} name="captcha" placeholder="type the text captcha" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs my-2">Valida</button>
                            </div>
                            <input disabled={disabled} className="btn bg-[#D1A054] text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-4 text-xl text-[#D1A054]'><small>New Here? <Link to="/signup">Create an account</Link></small></p>
                </div>
            </div>
        </div>

    );
};

export default Login;