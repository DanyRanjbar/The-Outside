import Card from "../componand/Card style/Card"
import "./HomePage.css"
import { useState } from 'react'
import Media from "../componand/social  media button/Media"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/all"

const HomePage = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

return(
        <div>

            <header className="w-100 d-flex align-items-center">
                <div className="w-100 d-flex align-items-center header-container">
                    <span className="w-100 d-flex">
                        <Link to="/">
                            <img className="logo-img-container" src="https://s2.uupload.ir/files/logo2_woh9.png" alt="Logo" />
                        </Link>
                    </span>
                    <span className=" w-100 h-100 gap-5 d-flex align-items-center justify-content-center">
                        <p className="p-tag-header d-flex"><a href="#home-link">Home</a></p>
                        <p className="p-tag-header d-flex"><a href="#feature-link">Feature</a></p>
                        <p className="p-tag-header d-flex"><a href="#project-link">Project</a></p>
                    </span>
                    <span className="w-100 d-flex justify-content-end">
                        <Link to="/LogIn">
                            <button className="Login-buttonn">Log In</button>
                        </Link>
                    </span>
                </div>

                
            </header>




            {/* first page */}
            <p className="p-id-tag" id="home-link"></p>
            <div className="w-100 h-100 first-page-container d-flex justify-content-around align-items-center" id="first-page">
                
                <div className="first-text-container">
                    <h1 className="big-text">The <br /> Outside</h1>
                    <p className="p-first-tag">inside the house with Outside <br /> We are a local home automation platform <br />
                    that operates inside Iran</p>
                    <Link to="/SignUp">
                        <button className="getstarted-button">Get Started</button>
                    </Link>
                </div>
                
                <div className="w-100 h-100 d-flex justify-content-end">
                    <img className="first-img-container" src="https://s2.uupload.ir/files/png_gtqz.png" alt="" />
                </div>

            </div>


            {/* responsive first page */}

            <div className="w-100 h-100 responsive-first-page-container d-flex justify-content-around align-items-center" id="first-page">
                
                <div className="w-100 h-100 d-flex justify-content-end">
                    <img className="responsive-first-img-container" src="https://s2.uupload.ir/files/png_gtqz.png" alt="" />
                </div>
                
                <div className="responsive-first-text-container">
                    <h1 className="big-text">The <br /> Outside</h1>
                    <p className="p-first-tag">inside the house with Outside <br /> We are a local home automation <br /> platform <br />
                    that operates inside Iran</p>
                    <Link to="/SignUp">
                        <button className="getstarted-button">Get Started</button>
                    </Link>
                </div>

            </div>
            <div className="w-100 d-flex align-items-center header-container-block position-absolute top-0 mt-3">
                    <span className="d-flex ms-5">
                        <Link to="/">
                            <img className="logo-img-container" src="https://s2.uupload.ir/files/logo2_woh9.png" alt="Logo" />
                        </Link>
                    </span>

                    <span className="d-flex burgerr">
                        <div className="menu-icon" onClick={handleShowNavbar}>
                            <RxHamburgerMenu/>
                            </div>
                            <div className={`nav-elements  ${showNavbar && 'active'} d-flex justify-content-center`}>
                                <ul className="text-center">
                                    <p>
                                        <a href="#home-link">Home</a>
                                    </p>
                                    <p>
                                        <a href="#feature-link">Feature</a>
                                    </p>
                                    <p>
                                        <a href="#project-link">Project</a>
                                    </p>  
                                    <Link to="/LogIn">
                                        <button className="Login-buttonn">Log In</button>
                                    </Link>                                 
                                </ul>
                            </div>
                    </span>


                </div>



            {/* second page */}
            <p className="p-id-tag" id="feature-link"></p>
            <div className="w-100 h-100 second-page-container">
                <h1 className="d-flex justify-content-center h1-card-container">Features of our services</h1>
                <div className="card-container">
                    <Card/>
                </div>
            </div>

            {/* Third page */}
            <div className="w-100 h-100 third-page-container">
                <p className="p-id-tag" id="project-link"></p>
                <div className="w-100 h-100 d-flex third-img-container">
                    <img className="w-100 third-img-container" src="https://s2.uupload.ir/files/223_k8em.png"/>
                </div>
                <div className="w-100 h-100 third-text-container">
                    <h1 className="w-100 h-100 fw-bolder mb-3 h1-third-tad">Why Outside?</h1>
                        <p className="fs-5 p-third-tag">Outside started working in September 2022 <br />
                        As you have noticed by now, we are a native platform <br /> for Internet of Things and home automation.<br /><br />
                        Now the question is that when they have foreign <br />platforms that work well and provide good services,<br /> why should an Iranian person come to use the <br />domestic and native platform?<br />
                        The servers of foreign platforms are located in different countries, and if a disruption occurs in the Internet system,<br /> their users who are receiving services in Iran will face great problems.<br />
                        On the other hand, our beloved country, Iran, has been sanctioned by western countries, and there is a possibility<br /> that foreign platforms will one day filter Iranian users<br /> and cause many problems for our compatriots.<br />
                        Outside's goal is to solve the mentioned problems<br /> and risks and provide unique services with<br /> a more affordable price than all the competitors <br />in the market.
                        inside the house with Outside
                        </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-100 d-flex justify-content-center mt-5 pt-5 flex-wrap">
                <div className="w-100 d-flex justify-content-center">
                    <p className="fs-1 fw-bold ">The Outside</p>
                </div>

                <div className="w-100 pb-5">
                    <Media/>

                </div>

                <div className="d-flex justify-content-start align-items-end">
                    <p className="position-absolute start-0">Create by <a className="a-tag" href=""> Dany</a></p>
                </div>
            </footer>
            

            
        </div>
    )
}

export default HomePage