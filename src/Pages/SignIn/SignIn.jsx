import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginSVG from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const SignIn = () => {

    const { signInUser } = useContext(AuthContext)

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="bg-white min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-16">
                <div className="text-center lg:text-left">
                    <img src={loginSVG} alt="" />
                </div>
                <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-[40px] font-semibold text-center">Sign In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your  email" className="input input-bordered" required />
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
                        <p className="text-lg font-medium text-center mt-7 mb-7">Have an account? <Link to="/signup" className="text-[#FF3811]">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;