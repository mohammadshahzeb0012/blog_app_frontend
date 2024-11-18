import { House, SquarePlus, UserRound } from "lucide-react"
import "./styles/footer.scss"
import { Link } from "react-router-dom"

const Footer = () => {
    return <div className="footer-wrraper">
        <span><Link to={"/"}><House className="footer-icon" /></Link></span>
        <span><Link to={"/createblog"}>< SquarePlus className="footer-icon" /></Link></span>
        <span><Link to={"/profile"}><UserRound className="footer-icon" /></Link></span>
    </div>
}

export default Footer