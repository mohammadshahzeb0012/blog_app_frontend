import { useState } from "react"
import Footer from "../footer"
import NavBar from "../navBar"
import { Loader } from "lucide-react"
import "./styles/editProfile.scss"
import request from "../../network/request"
import Endpoints from "../../network/endpoints"
import { useNavigate } from "react-router-dom"

const EditProfile = () => {

    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handelEdit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        
        setLoading(true)
        const data = {}
        if (name) data.name = name
        if (email) data.email = email
        if (password) data.password = password
       try {
        const { success, data }  = await request({
            url: Endpoints.editProfile,
            method: "POST",
            data: {
                name: name,
                ...(email && { email }),  // Conditionally include 'email'
                ...(password && { password })  
            }
        })
        setLoading(false)
        if(success){
            alert("profile update succes")
            navigate("/profile")
        }else{
          alert(data?.message)
        }
       } catch (error) {
        setLoading(false)
         alert("somenthing went wrong")       
        }
    }

    return (
        <div>
            <NavBar />
            <div className="edit-profile-page">
                <form onSubmit={handelEdit}>
                    <div className="form-head">
                        <h1>Edit your profile</h1>
                    </div>
                    <div className="edit-input-wrraper">
                        <label htmlFor="name">Name<span>*</span></label>
                        <input type="text" placeholder="Enter your name" name="name" id="name" required />
                    </div>
                    <div className="edit-input-wrraper">
                        <label htmlFor="email">Email<span>*</span></label>
                        <input type="email" placeholder="Enter your email" name="email" id="email" />
                    </div>
                    <div className="edit-input-wrraper">
                        <label htmlFor="password">Password<span>*</span></label>
                        <input type="password" placeholder="Enter your password" name="password" id="password" />
                    </div>
                    <button style={Loading ? { cursor: "not-allowed" } : { cursor: "pointer" }} disabled={Loading}>{Loading ? <>Please Wait <Loader className="spin-loader" /> </> : "Edit Profile"}</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default EditProfile
