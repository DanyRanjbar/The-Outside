import "./LoginPage.css"
import { Link } from "react-router-dom"
const LoginPage = () => {

    return(
        <div className="w-100 h-100 body-style">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="form1">
                <h3>Login</h3>

                <label className="label1" for="username">Username</label>
                <input className="input1" type="text" placeholder="Email or Phone" id="username"/>

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <button className="btn-Login">Log In</button>
                <div className="social1">
                    <div className="go"><i className="fab fa-google"></i>Did you not Register?<br />
                    <Link to="/Signup">
                        <a href="">Sign Up here</a>
                    </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPage