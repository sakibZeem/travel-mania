import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            navigate('/')
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">If you don't have an account! Please Signup first.</p>
                        <Link to="/signup"><button className='btn btn-outline btn-warning'>Signup Here</button></Link>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login <MdLogin /></button>
                            </div>
                        </form>
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
    );
};

export default Login;