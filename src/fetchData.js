import { useState, useEffect } from "react";

//設定custome hook
//命名必須從use...開頭才會有作用
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    //根據stat切換時觸發的function
    //若沒加dependency每次渲染時都會觸發
    //加dependency只會根據特定參數觸發
    useEffect( () => {
        //若快速切換會造成錯誤 所以需要有一個控制物件將程序停止
        const abortController = new AbortController();

        fetch(url,{signal: abortController.signal})
        .then(res => {
            if(!res.ok)
                throw Error("Could not fetch data");

            return res.json();
        })
        //此處data命名不會衝突到
        .then(data => {
            //讀到資料後消除loading
            setData(data);
            setIsPending(false);
            setErrorMessage(null);
        })
        .catch(err => {
            if(err.name === "AbortError")
                console.log("Abort Fetch Procedure");
            else{
                setIsPending(false);
                setErrorMessage(err.message);
            }
        })
        //放棄整個程序
        return () => abortController.abort();
    }, [url]);
    //回傳一個object
    return {data, isPending, errorMessage};
}

export default useFetch;