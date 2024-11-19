import { Link } from "react-router-dom"
import "./styles/desktopNavbar.scss"

const DesktopNavbar = ({ token ,user}) => {
    return (
        <div className="Desktop-navbar-wrraper">
            <div className="logo-wrraper">
                <h3>BLOG <span>APP</span></h3>
            </div>

            {
                token ?
                    <div className="Desktop-navbar-profile-link-wrraper">
                        <Link className="Desktop-navbar-profile-link">{user?.name || user.fullName ? user.name : "NA"}</Link>
                    </div> :
                    <div className="Desktop-navbar-link-wrraper">
                        <Link to={"/login"} className="Desktop-navbar-link activ-link">Sign In</Link>
                        <Link to={"/signup"} className="Desktop-navbar-link">Sign Up</Link>
                    </div>
            }
        </div>
    )
}

export default DesktopNavbar