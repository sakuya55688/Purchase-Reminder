
import BlogList from "./BlogListTemplate"; //載入通用模板
import useFetch from "./fetchData";

const Home = () => {
    //接收資料並重新命名(data:你想要的名字)
    const { data:blogs, isPending, errorMessage } = useFetch('http://localhost:8000/blogs');

    //一個給子元件call的function 用於刪除blog
    //使用filter篩出某特定id後用setBlog更新資料 
    //而原先blogs資料並未被取代
    /*
    const deleteHandler = (id) => {
        const newBlogs = blogs.filter( (blog) => (blog.id !== id) );
        setBlogs(newBlogs);
    }
    */
    

    return (
        <div className="home">

            { errorMessage && <div>{errorMessage}</div>}
            {
            //因為blogs data需要時間讀取 一開始的資料是null
            //所以需要把html節點包在程式邏輯中來判斷是否已經有資料了
            }
            {isPending && <div>Loading...</div>}
            {
            //父元件到子元件傳遞資料props 
            //props的寫法 資料名={欲傳入資料(可以是變數或是function)}
            }
            {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            
        </div>

    );
}
 
export default Home;


/* //hook基礎用法
const Home = () => {

    //hook的寫法 const [variable, function] = useState(original variable)
    const [name, setName] = useState("mario");
    const [age, setAge] = useState(50);

    const clickHandler = () => {
        setName("Wario");
        setAge(25);
    }
    const clickHandler2 = (name, event) =>{
        console.log("Hello " + name, event.target);
    }
    

    return (
        <div className="home">
            
            <BlogList blogs={blogs} title="All Blogs" />
            
            {
            //hook基本對應寫法
            //<p> {name} is {age} years old. </p>
            //<button onClick={clickHandler}>Click</button>
            }
            {
            //hook需傳資料時寫法
            //<button onClick={(event) => clickHandler2("Jason",event)}>Click Harder</button>
            }
        </div>

    );
}
*/
