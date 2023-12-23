import {Link, useNavigate, useParams} from "react-router-dom";

import './BlogPage.css'
import TimeDate from '../../helpers/TimeDate.js'
import {useEffect, useState} from "react";
import axios from "axios";
import {CaretLeft, Clock} from "@phosphor-icons/react";



function BlogPage() {
    const { id } = useParams();


    const [oneBlog,setOneBlog]=useState([])
    const [error,setError]=useState()
    const navigate = useNavigate()

    async function fetchOneBlog() {
        try {
            const result = await axios.get(url)
            console.log(result.data)
            setOneBlog(result.data)

        } catch (e) {
            setError(e)
            console.error(error);
        }
    }

useEffect(() => {
        fetchOneBlog()
    }, []);
    const url ='http://localhost:3000/posts/' +id




    return (
        <>{Object.keys(oneBlog).length > 0 ?
        <section className="outer-content-container">
            <div className=" inner-content-container__text-restriction">
                <div className='post-detail-section'>
                <h1>{oneBlog.title}</h1>
                <h2>{oneBlog.subtitle}</h2>
                <p className="post-detail-author">Geschreven door <em>{oneBlog.author}</em> op {TimeDate(oneBlog.created)}</p>
                <span className="post-detail-read-time">
                    <Clock color="#50535C" size={18}/>
                    <p> {oneBlog.readTime} minuten lezen</p>
                </span>
                <p>{oneBlog.content}</p>
                <p>{oneBlog.comments} reacties - {oneBlog.shares} keer gedeeld</p>

                <Link to="/Blogs" className="back-link">
                    <CaretLeft color="#38E991" size={22}/>
                    <p>Terug naar de overzichtspagina</p>
                </Link>
                </div>
            </div>
        </section>
            : navigate('*') }
        </>
    )

}
export default BlogPage