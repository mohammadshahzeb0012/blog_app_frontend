import React, { useEffect, useState } from 'react'
import NavBar from '../navBar'
import Footer from '../footer'
import {  Loader } from 'lucide-react'
import "./styles/createBlog.scss"
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import request from '../../network/request'
import Endpoints from '../../network/endpoints'

const CreateBlog = () => {

    const [Loading, setLoading] = useState(false)
    const token = Cookies.get("token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

    const postBlog = async (e) => {
        e.preventDefault()
        setLoading(true)
        const title = e.target.title.value
        const tags = e.target.tags.value
        const content = e.target.content.value
        try {
            const { success, data } = await request({
                url: Endpoints.createBlog,
                method: "POST",
                data: {
                    title: title,
                    content: content,
                    tags: tags
                }
            })
            setLoading(success)
            if (success) {
                setLoading(false)
                console.log(data)
                alert("blog created success")
            } else {
                alert(data)
            }
        } catch (error) {
            setLoading(false)
            alert("something went wrong")
        }
    }

    return (
        <div>
            <NavBar />
            <div className="create-blog-page">
                <form onSubmit={postBlog}>
                    <div className="form-head">
                        <h1>Create Blog</h1>
                    </div>
                    blog-input-wrraper

                    <div className="blog-input-wrraper">
                        <label htmlFor="title">Title<span>*</span></label>
                        <input type="text" placeholder="Title" name="title" id="title" required />
                    </div>
                    <div className="blog-input-wrraper">
                        <label htmlFor="tags">Tags<span>*</span></label>
                        <input type="text" placeholder="#tech,#trending,#awesome" name="tags" id="tags" required />
                    </div>
                    <div className="blog-input-wrraper">
                        <label htmlFor="content">Content<span>*</span></label>
                        <textarea rows={4} placeholder="Content" name="content" id="content" required></textarea>
                    </div>
                    <button style={Loading ? { cursor: "not-allowed" } : { cursor: "pointer" }} disabled={Loading}>{Loading ? <>Please Wait <Loader className="spin-loader" /> </> : "Create Blog"}</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreateBlog
