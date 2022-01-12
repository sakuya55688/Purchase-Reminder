import { Link } from "react-router-dom";


const ItemPreview = ({products,filterYear,filterMonth}) => {

    return ( 
        <div className="blog-list">
            {
            products.filter((product) => 
                (product.arrivalDate.year+product.arrivalDate.month) === filterYear+filterMonth
            ).map(
        
                (product) => (
                <div className="product-preview" key={filterYear+filterMonth+product.id}>
                    <Link to={`products/${product.id}`}>
                        <h3>{product.name}&nbsp;{product.title}</h3>   
                        <p>$&nbsp;{product.price + product.deliveryFee}</p>
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
 
export default ItemPreview;

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