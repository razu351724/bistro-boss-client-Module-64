import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers.jsx/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication2.png'
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Login = () => {
    const [ setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log('state in the location', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

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
                Swal.fire({
                    title: "User Login Successful.",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        e.preventDefault()
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex flex-col md:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
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
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the text captcha" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-2">
                                    {/* TODO: apply disabled for re captcha */}
                                    <input disabled={false} className="btn bg-[#D1A054] text-white my-2" type="submit" value="Login" />
                                </div>
                            </div>
                        </form>
                        <p className='text-center mb-4 text-xl text-[#D1A054]'><small>New Here? <Link to="/signup">Create an account</Link></small></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;