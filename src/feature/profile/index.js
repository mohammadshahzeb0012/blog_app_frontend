import React, { useEffect } from 'react'
import Footer from '../footer'
import MyBlogs from '../blog/MyBlogs'
import ProfileCard from "./ProfileCard"
import NavBar from '../navBar'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const token = Cookies.get("token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
          navigate("/")
        }
      }, [token])

    return (
        <div>
            <NavBar />
            <ProfileCard />
            <MyBlogs />
            <Footer />
        </div>
    )
}

export default Profile