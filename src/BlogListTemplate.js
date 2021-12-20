import { Link } from "react-router-dom";


const BlogList = ({blogs, title, deleteHandler}) => {

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {
            blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    {
                        //接收刪除function的示範按鈕
                        //<button onClick={()=> deleteHandler(blog.id)}>Delete Blog</button>
                    }
                </div>
            ))
            }    
        </div>
    );
}
 
export default BlogList;

/* props寫法1 只傳一個props參數
    const BlogList = (props) => {
        const blogs = props.blogs;
        const title = props.title;

        return();
    }
*/
/* props寫法2 把props內參數解體 直接使用
    const BlogList = ({blogs, title}) => {
        

        return();
    }
*/