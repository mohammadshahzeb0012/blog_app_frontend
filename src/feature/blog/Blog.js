import { Heart, MessageCircle } from "lucide-react"
import "./styles/blogs.scss"

const Blog = ({ blogData }) => {
    return (
        <div className="blog-card-wrraper">
            <div className="blog-card">
                <div className="blog-by-and-date">
                    <h5>{blogData?.postedBy?.fullname || blogData?.postedBy?.name}</h5>
                    <span>2 days ago</span>
                </div>
                <span className="blog-card-title">{blogData.title}</span>
                <p>{blogData?.content}</p>
                <hr />
                <div className="like-comment-wrraper">
                    <Heart className="like-comment-icon" />
                    <MessageCircle className="like-comment-icon" />
                </div>
                {/* #55D5A0 */}
            </div>
        </div>
    )
}

export default Blog
