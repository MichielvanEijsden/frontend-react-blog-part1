import './NewPost.css'
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import readTimeCalc from "../../helpers/readTimeCalc.js";
import {useState} from "react";
import axios from "axios";


function NewPost(){
    const {register, handleSubmit,formState:{errors}} = useForm()
    const [error, setError] = useState()
    const navigate = useNavigate()
    async function handleFormSubmit(data) {
        try {
            const response = await axios.post('http://localhost:3000/posts', {
                ...data,
                shares: 0,
                comments: 0,
                created: new Date().toISOString(),
                readTime: readTimeCalc(data.content),
            })
            console.log(response.data);
        } catch (e) {
            setError(e)
            console.error(error);
        }

    console.log('De blog is succesvol verzameld! 🌈')
        navigate('/Blogs')
    }

    return(
        <section className="container">
            <div className="">
        <form  onSubmit={handleSubmit(handleFormSubmit)} className="new-post-form">
            <label>Title:</label>
                <input type="text" id='post-title' {...register("title",{required:{value: true,message:'voer een title in'}})}/>
            {errors.title && <p className="form-error-message">{errors.title.message}</p>}
            <label>Subtitle:</label>
                <input type="text" id='post-subtilte' {...register("subtitle",{required:{value: true,message:'voer een subtitle in'}})}/>
            {errors.subtitle && <p className="form-error-message">{errors.subtitle.message}</p>}
            <label>Your name:</label>
                <input type="text" id='post-autor'{...register("author",{required:{value: true,message:'vul je naam in'}})}/>
                {errors.author && <p className="form-error-message">{errors.author.message}</p>}
            <label className='list'>Your Blog:</label>
                <textarea rows="10" cols="40" id='post-content' {...register("content",{maxLength:{value: 2000,message:'het bericht is te lang'}})}/>
            {errors.content && <p className="form-error-message">{errors.content.message}</p>}
            <button type="submit">
                Verzend
            </button>
        </form>
            </div>
        </section>
    )

}
export default NewPost