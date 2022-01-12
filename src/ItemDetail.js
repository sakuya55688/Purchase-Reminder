import { useParams } from "react-router-dom";
import useFetch from "./fetchData";
import { useHistory } from "react-router-dom";

const ItemDetail = () => {

    const { id } = useParams(); //讀取網址列的值
    const { data: product, error, isPending } = useFetch("http://localhost:8000/products/" + id);
    const history = useHistory();

    const clickHandler = () => {

        fetch("http://localhost:8000/products/" + product.id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/");
        });

    }

    return (  
        <div className="product-detail">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { product && (
                <article>
                    <h1>{ product.title }</h1>
                    <p> products of { product.name }</p>
                    <div>{ product.content }</div>
                    <button onClick={clickHandler}>Delete</button>
                </article>
                )
            }
        </div>
    );
}
 
export default ItemDetail;