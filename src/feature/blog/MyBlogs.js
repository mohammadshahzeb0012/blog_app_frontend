import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Endpoints from "../../network/endpoints"
import { updateMyBlogs } from "../../redux/myBlogsSlice"
import request from "../../network/request"
import { Loader } from "lucide-react"
import "./styles/blogs.scss"
import Blog from "./Blog"


const MyBlogs = () => {

    const { apiStatus, myBlogs } = useSelector(store => store.myBlogs)
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchMyBlogs = async () => {
            try {
                const { success, data } = await request({
                    url: Endpoints.myBlogs,
                    method: "GET"
                })
                if (success) {
                    dispatch(updateMyBlogs({
                        status: "success",
                        data: data
                    }))
                } else {
                    alert(data)
                }
            } catch (error) {
                alert("something went wrong")
            }
        }
        fetchMyBlogs()
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
        <div>
            
            <div className="blog-page-wrrapwer">
                {
                    myBlogs.data.map((blogData) => {
                        return <Blog key={blogData.title} blogData={blogData} />
                    })
                }
            </div>
        </div>
    )
}

export default MyBlogs
