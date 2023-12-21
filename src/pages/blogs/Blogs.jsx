
import {Link} from "react-router-dom";
import './Blogs.css'
import {useEffect, useState} from "react";
import axios from "axios";



function Blogs() {

    const [allBlogs,setAllBlogs]=useState([])
    const [error,setError]=useState()

    useEffect(() => {
        fetchAllBlogs()
    }, []);
    async function fetchAllBlogs() {
        try {
            const result = await axios.get('http://localhost:3000/posts')
            console.log(result.data);
            setAllBlogs(result.data)

        } catch (e) {
            setError(e)
            console.error(error);
        }
    }

    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <h1>Bekijk alle {allBlogs.length} posts op het platform</h1>
                <ul className="post-list">
                    {allBlogs.map((post) => {
                        return <li key={post.id} className="post-item">
                            <h2 className="post-title"><Link to={`/Blogs/${post.id}`}>{post.title}</Link> ({post.author})
                            </h2>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Blogs