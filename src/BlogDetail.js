import { useParams } from "react-router-dom";
import useFetch from "./fetchData";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {

    const { id } = useParams(); //讀取網址列的值
    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const clickHandler = () => {

        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/");
        });

    }

    return (  
        <div className="blog-detail">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <p> Written by { blog.author }</p>
                    <div>{ blog.content }</div>
                    <button onClick={clickHandler}>Delete</button>
                </article>
                )
            }
        </div>
    );
}
 
export default BlogDetail;