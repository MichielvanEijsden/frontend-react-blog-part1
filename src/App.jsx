import './App.css'
import {Routes, Route} from "react-router-dom";
import Navigation from "../src/pages/navigation/Navigation.jsx";
import Home from "./pages/home/Home.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import BlogPage from "./pages/blogpage/BlogPage.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import ErrorPage from "./pages/errorpage/Errorpage.jsx";
import Footer from "./pages/footer/Footer.jsx";


function App() {
    return (
        <>
        <Navigation/>
            <main>
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/Blogs" element={<Blogs/>}/>
            <Route path ="/Blogs/:id" element={<BlogPage/>}/>
            <Route path= "/NewPost" element={<NewPost/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
            </main>
            <footer>
            <Footer/>
            </footer>
        </>
    )
}

export default App
