import { Heart, MessageCircle, Pen, Trash } from "lucide-react"
import "./styles/blogs.scss"
import EpochToHuman from "../../utils/EpochToHuman"

const Blog = ({ blogData, show,handelDeletePost }) => {
    return (
        <div className="blog-card-wrraper">
            <div className="blog-card">
                <div className="blog-by-and-date">
                    <h5>{blogData?.postedBy?.fullname || blogData?.postedBy?.name}</h5>
                    <span>{EpochToHuman(parseInt(blogData.createdAt))}</span>
                </div>
                <span className="blog-card-title">{blogData.title}</span>
                <p>{blogData?.content}</p>
                <hr />
                <div className="like-comment-wrraper">
                    <div className="like-comment-left">
                        <Heart className="like-comment-icon" />
                        <MessageCircle className="like-comment-icon" />
                    </div>
                    {
                        show &&
                        <div className="like-comment-right">
                            <Trash className="delete-icon"
                            onClick={()=>handelDeletePost(blogData._id)}
                            />
                            <Pen className="like-comment-icon" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog
