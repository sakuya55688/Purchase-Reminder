import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("Gura");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault(); //防止refresh
        setIsPending(true);
        
        const blog = {title, content, author};  //一個資料object

        fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)

        }).then(() => {
            console.log("Add New Blog");
            setIsPending(false);
            history.push("/"); //創建結束時用redirect元件重導至Home
        });
    }

    return (
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Content</label>
                <textarea 
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Gura">Gura</option>
                    <option value="Calli">Calli</option>
                    <option value="Ina">Ina</option>
                    <option value="Kiara">Kiara</option>
                    <option value="Watson">Watson</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding...</button> }
                
            </form>
        </div>
    );
}
 
export default Create;
