import { useDispatch, useSelector } from "react-redux";
import Blog from "./Blog";
import "./styles/blogs.scss"
import { Loader } from "lucide-react";
import { useEffect } from "react";
import request from "../../network/request";
import Endpoints from "../../network/endpoints";
import { upDateAllBlogs } from "../../redux/allBlogsSlice"



const Blogs = () => {
    const {allBlogs,apiStatus} = useSelector(store => store.allBlogs)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { success, data } = await request({
                    url: Endpoints.allBlogs,
                    method: "GET"
                })
                if (success) {
                    dispatch(upDateAllBlogs({
                        status: "success",
                        data: data
                    }))
                }else{
                    alert(data)
                }
            } catch (error) {
                  alert("something went wrong")
            }
        }
        fetchBlogs()
    }, [])

    if (apiStatus === "init" || apiStatus === "pending") {
        return (
            <div className="loader-wrapper">
                <p>Please Wait </p> 
                <Loader className="spin-loader" />
            </div>
        );
    }

console.log(allBlogs)

    return (        
        <div className="blog-page-wrrapwer">
            {
                allBlogs.data.map((blogData) => {
                    return <Blog key={blogData.title} blogData={blogData} />
                })

            }
        </div>
    )
}

export default Blogs
