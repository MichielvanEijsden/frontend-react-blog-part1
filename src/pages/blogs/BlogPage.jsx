import {useParams} from "react-router-dom";

function BlogPage() {
    const { id } = useParams();

    return (
        <div>het blog id is {id}</div>
    )
}
export default BlogPage