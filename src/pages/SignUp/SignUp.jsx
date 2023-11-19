import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => { console.log(data) };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", {required: true})} name="name" placeholder="name" className="input input-bordered"  />

                            {errors.name && <span className="text-red-600">Name is nrequired</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {required: true})} name="name" placeholder="email" className="input input-bordered" />

                            {errors.email && <span className="text-red-600">Email is nrequired</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {required: true, minLength: 6, maxLength: 20})} name="name" placeholder="password" className="input input-bordered" required />

                            {errors.password && <span className="text-red-600">password is nrequired</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-[#D1A054] text-white" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center mb-4 text-[#D1A054] text-xl'><small>Already registered? <Link to="/login">Go to log in</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;