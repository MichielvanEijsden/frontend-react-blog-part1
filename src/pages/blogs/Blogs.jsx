import posts from '../../constants/data.json'
import {NavLink} from "react-router-dom";
import './Blogs.css'
import BlogsCounter from "../../helpers/BlogsCounter.jsx";

function Blogs() {

    return (
        <div className="page-layout">
            <h1>Bekijk alle <BlogsCounter/> posts op het platform</h1>
            {posts.map((post) => {
                return (
                    <>
                        <div className="blog-box">
                            <p><NavLink to={String(post.id)} className="link-color">{post.title}</NavLink>({post.author})</p>
                            <p>{post.comments} Reacties - {post.shares} keer gedeeld</p>
                        </div>
                    </>)
            })}
        </div>
    );
}

export default Blogs