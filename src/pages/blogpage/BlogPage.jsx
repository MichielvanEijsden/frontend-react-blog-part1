import {NavLink, useParams} from "react-router-dom";
import posts from '../../constants/data.json'
import './BlogPage.css'
function BlogPage() {
    const { id } = useParams();

    return (
        <div>
            {posts.map((post) => {

                if(id === `${post.id}`){

                return (
                    <>
                        <div className="blog-box">
                            <h1>{post.title}</h1>
                            <h4>{post.subtitle}</h4>
                            <p>Geschreven door {post.author} op {post.created}</p>
                            <p>{post.content}</p>
                            <p>{post.comments} Reacties - {post.shares} keer gedeeld</p>
                            <NavLink to="/Blogs" className="return-link-color"> Terug naar overzichtspagina</NavLink>
                        </div>
                    </>)}
            })}
        </div>
    )
}
export default BlogPage