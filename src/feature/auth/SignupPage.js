import { useNavigate } from "react-router-dom"
import "./styles/vSigmupPage.scss"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import request from "../../network/request"
import Endpoints from "../../network/endpoints"
import { Loader } from "lucide-react"
import NavBar from "../navBar"


const SignupPage = () => {
  const navigate = useNavigate()
  const [Loading, setLoading] = useState(false)
  const token = Cookies.get("token")

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])

  const handelSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    try {
      const { success, data } = await request({
        url: Endpoints.signup,
        method: "POST",
        data: {
          name: name,
          email: email,
          password: password
        }
      })
      setLoading(false)
      if (success) {
        alert("Signup Success!")
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
  
    <div className="sign-up-page">
      <form onSubmit={handelSignUp}>
        <div className="form-head">
          <h1>Create your account</h1>
          <p>Sign Up and Start Exploreing</p>
        </div>
        <div className="sign-input-wrraper">
          <label htmlFor="name">Name<span>*</span></label>
          <input type="text" placeholder="Enter your name" name="name" id="name" required />
        </div>
        <div className="sign-input-wrraper">
          <label htmlFor="email">Email<span>*</span></label>
          <input type="email" placeholder="Enter your email" name="email" id="email" required />
        </div>
        <div className="sign-input-wrraper">
          <label htmlFor="password">Password<span>*</span></label>
          <input type="password" placeholder="Enter your password" name="password" id="password" required />
        </div>
        <button style={Loading ? { cursor: "not-allowed" } : { cursor: "pointer" }} disabled={Loading}>{Loading ? <>Please Wait <Loader className="spin-loader" /> </> : "Sign Up"}</button>
        <p className="alreday-have-an-acount">Already have an account? <span onClick={() => navigate("/login")}>Sign In</span></p>
      </form>
    </div>
    </>
  )
}

export default SignupPage
