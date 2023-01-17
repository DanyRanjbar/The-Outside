import { Link } from "react-router-dom"
import "./SignupPage.css"

const SignupPage = () => {
    return(
        <div className="w-100 h-100 body-style">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>SignUp</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Username" id="username"/>

                <label for="username">Email</label>
                <input type="text" placeholder="Email or Phone" id="username"/>

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <button className="btn-SignUp">Sign In</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>Do you have an account?<br />
                    <Link to="/Login">
                        <a href="">Login here</a>
                    </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignupPage