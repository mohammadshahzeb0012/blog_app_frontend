import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Endpoints from "../../network/endpoints"
import { updateMyBlogs } from "../../redux/myBlogsSlice"
import request from "../../network/request"
import { Loader } from "lucide-react"
import "./styles/blogs.scss"
import Blog from "./Blog"
import { Modal } from "antd"


const MyBlogs = () => {

    const dispatch = useDispatch()
    const { apiStatus, myBlogs } = useSelector(store => store.myBlogs)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [blogToDelete, setBlogToDelete] = useState(null);


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

    const handelDeletePost = (blogID) => {
        setBlogToDelete(blogID);
        setIsModalVisible(true);
    }

    const confirmDelete = async () => {
        if (blogToDelete) {
            try {
                const { success, data } = await request({
                    url: Endpoints.deleteBlog,
                    method: "POST",
                    data: {
                        blogID: blogToDelete
                    }
                })
                if (success) {
                    alert("blog deleted")
                } else {
                    alert(data)
                }
            } catch (error) {
                alert("something went wrong")
            } finally {
                setIsModalVisible(false)
            }
        }
    }

    return (
        <div>
            <div className="blog-page-wrrapwer">
                {
                    myBlogs.data.map((blogData) => {
                        return <Blog key={blogData.title} blogData={blogData} show={true} handelDeletePost={handelDeletePost} />
                    })
                }
            </div>
            <div>
                <Modal
                    title="Are you sure?"
                    visible={isModalVisible}
                    onOk={confirmDelete}
                    onCancel={() => setIsModalVisible(false)}
                    okText="Yes, Delete"
                    cancelText="Cancel"
                >
                </Modal>
            </div>
        </div>
    )
}

export default MyBlogs
