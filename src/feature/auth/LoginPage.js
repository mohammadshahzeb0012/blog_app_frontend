import { useNavigate } from "react-router-dom"
import "./styles/LoginPage.scss"
import request from "../../network/request"
import Endpoints from "../../network/endpoints"
import { useEffect, useState } from "react"
import { Loader } from "lucide-react"
import Cookies from "js-cookie"
import NavBar from "../navBar"

const LoginPage = () => {

  const navigate = useNavigate()
  const [Loading, setLoading] = useState(false)
  const token = Cookies.get("token")

  
  useEffect(()=>{
     if(token){
       navigate("/")
     }
   },[token])

  const handelLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const email = e.target.email.value
    const password = e.target.password.value
    try {
      const { success, data } = await request({
        url: Endpoints.login,
        method: "POST",
        data: {
          email: email,
          password: password
        }
      })
      setLoading(false)
      if (success) {
        Cookies.set("token", data.token)
        Cookies.set("user",JSON.stringify(data.user))
        navigate("/")
      } else {
        alert(data)
      }
    } catch (error) {
      setLoading(false)
      alert("something went wrong")
    }
  }

  return (
   <>
   <NavBar />
   <div className="Login-page">
      <form onSubmit={handelLogin}>
        <div className="form-head">
          <h1>Welcome back</h1>
          <p>Sign In to Get Started.</p>
        </div>
        <div className="sign-input-wrraper">
          <label htmlFor="email">Email<span>*</span></label>
          <input type="email" placeholder="Enter your email" name="email" id="email" required />
        </div>
        <div className="sign-input-wrraper">
          <label htmlFor="password">Password<span>*</span></label>
          <input type="password" placeholder="Enter your password" name="password" id="password" required />
        </div>

        <button style={Loading ? { cursor: "not-allowed" } : { cursor: "pointer" }} disabled={Loading}>{Loading ? <>Please Wait <Loader className="spin-loader" /> </> : "Sign In"}</button>
        <p className="alreday-have-an-acount">Don’t have an account?  <span onClick={() => navigate("/signup")}>Sign Up</span></p>
      </form>
    </div>
   </>
  )
}


export default LoginPage