import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginSVG from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="bg-white min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-16">
                <div className="text-center lg:text-left">
                    <img src={loginSVG} alt="" />
                </div>
                <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-[40px] font-semibold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <input className="bg-[#FF3811] text-white py-3 rounded-lg" type="submit" value="Sign In" />
                        </div>
                        <p className="text-lg font-medium text-center mt-7 mb-7">Or Sign In with</p>
                        <div className="flex justify-center items-center gap-4">
                            <Link className="flex justify-center items-center w-12 h-12 bg-[#F5F5F8] rounded-full text-blue-800">
                                <FaFacebookF />
                            </Link>
                            <Link className="flex justify-center items-center w-12 h-12 bg-[#F5F5F8] rounded-full text-blue-600">
                                <FaLinkedinIn />
                            </Link>
                            <Link className="flex justify-center items-center w-12 h-12 bg-[#F5F5F8] rounded-full text-orange-500">
                                <FaGoogle />
                            </Link>
                        </div>
                        <p className="text-lg font-medium text-center mt-7 mb-7">Already Have an account? <Link to="/signin" className="text-[#FF3811]">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;