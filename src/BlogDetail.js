import { useParams } from "react-router-dom";

const BlogDetail = () => {

    const { id } = useParams();
    const { data, error, isPending } = useFetch("");
    return (  
        <div className="blog-detail">
            <h2>Blog Detail - {id}</h2>
        </div>
    );
}
 
export default BlogDetail;