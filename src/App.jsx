import './App.css'
import {Routes, Route} from "react-router-dom";
import Navigation from "../src/pages/navigation/Navigation.jsx";
import BlogPage from "./pages/blogpage/BlogPage.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import Home from "./pages/home/Home.jsx";
import ErrorPage from "./pages/errorpage/Errorpage.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";


function App() {
    return (
        <>

        <Navigation/>
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/Blogs" element={<Blogs/>}/>
            <Route path ="/Blogs/:id" element={<BlogPage/>}/>
            <Route path= "/NewPost" element={<NewPost/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>

        </>
    )
}

export default App
