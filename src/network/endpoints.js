const baseUrl = "https://blog-appbackend.onrender.com";

const Endpoints = {
    login: `${baseUrl}/user/login` ,
    signup: `${baseUrl}/user/register` ,
    editProfile: `${baseUrl}/user/editProfile`,
    createBlog: `${baseUrl}/blog/createBlog`,
    allBlogs: `${baseUrl}/blog/allBlogs`,
    myBlogs: `${baseUrl}/blog/myBlogs`,
    myProfile: `${baseUrl}/user/myProfile`
}

export default Endpoints