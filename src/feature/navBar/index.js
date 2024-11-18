import { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import Cookies from "js-cookie";

const NavBar = () => {
    const [token, setToken] = useState(Cookies.get("token") || null);
    const [user,setUser] = useState(Cookies.get("user") && JSON.parse(Cookies.get("user")) || null)

    useEffect(() => {
        const userToken = Cookies.get("token");
        const userData = Cookies.get("user")
        if (userToken && Cookies.get("user")) {
            setToken(userToken);
            setUser(JSON.parse(userData))
        }
    }, []); 

    return (
        <div>
            <DesktopNavbar token={token}  user={user}/>
        </div>
    );
};

export default NavBar;
