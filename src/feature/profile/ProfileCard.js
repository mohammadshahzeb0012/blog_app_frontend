import { useNavigate } from "react-router-dom"
import "./styles/profile.scss"
import Cookies from "js-cookie"
import { useEffect } from "react"
import Endpoints from "../../network/endpoints"
import request from "../../network/request"
import { useDispatch, useSelector } from "react-redux"
import { Loader } from "lucide-react"
import { updateMyProFile } from "../../redux/myProfileSlice"

const ProfileCard = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch() 
  const {apiStatus,myProfile} = useSelector(store=>store.myProfile)
  const handelLogout = () => {
    Cookies.remove("token")
    Cookies.remove("user")
    navigate("/")
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { success, data } = await request({
          url: Endpoints.myProfile,
          method: "GET"
        })
        if (success) {
          dispatch(updateMyProFile({
            status: "success",
            data: data.data
          }))
        } else {
          alert("something went wrong")
        }
      } catch (error) {
        alert("something went wrong")
      }
    }
    fetchProfile()
  }, [])

  if (apiStatus === "init" || apiStatus === "pending") {
    return (
        <div className="loader-wrapper">
            <p>Please Wait </p> 
            <Loader className="spin-loader" />
        </div>
    );
}



  return (
    <div className="profile-page-wrraper">
      <div className="profile-wrraper">
        <div className="profile-field-wrraper">
          <span>Full NAme:</span>
          <p>{myProfile?.name || myProfile?.fullname}</p>
        </div>
        <div className="profile-field-wrraper">
          <span>Email: </span>
          <p>{myProfile?.email}</p>
        </div>
        <div className="profile-field-wrraper">
          <button onClick={() => navigate("/EditProfile")}>Edit Profile</button>
          <button onClick={handelLogout}>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
