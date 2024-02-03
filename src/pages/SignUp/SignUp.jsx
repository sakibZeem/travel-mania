import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";



const SignUp = () => {
    const [error, setError] = useState('');
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;
        console.log(username, email);
        if (password !== cpassword) {
            setError('Your password did not match!')
        }
        else {
            signUp(email, password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser);
                    setError('');
                    navigate('/login');
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Already have an account? <Link to="/login">Login Now</Link></p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <input type="text" name="username" placeholder="username" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="cpassword" placeholder="confirm password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Signup</button>
                                </div>
                            </form>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider text-xs">OR</div>
                                <button className='btn btn-sm btn-outline btn-warning mb-2'>Sign In with Google <FaGoogle /></button>
                                <button className='btn btn-sm btn-outline btn-warning'>Sign In with Facebook <FaFacebook /></button>
                            </div>
                            {
                                error &&
                                <div className="toast toast-middle">
                                    <div className="alert alert-error">
                                        <span> {error} </span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;