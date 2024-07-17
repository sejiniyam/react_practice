import React, { useEffect, useState } from "react";
import Item from "./Item";

function AidtAPI() {

    const getItem = async (itemId) => await fetch('https://secret/' + itemId, {
        method : "GET"
    }).then(res => res.json()).then(res => {
        console.log("응답 값 : ", res.data);
        return res.data;
    });

    const [ item, setItem ] = useState(null);
    const [ itemId, setItemId ] = useState(null);
    const [ input, setInput ] = useState('');

    const submit = (e) => {
        e.preventDefault(); // 중복 이벤트 방지 (아주 중요한 녀석)
        setItemId(input);
    };
    
    // 4739797
    useEffect(() => {
        const getData = async() => {
        const data = await getItem(input);
        setItem(data);
        }
        getData();
    }, [itemId]);

    return (
        <div className="App">
            <form onSubmit={submit}>
                <h2>문항 검색기</h2>
                <input value={input} onChange={(e)=> setInput(e.target.value)}/>
                <button type="submit">search</button>
            </form>
        {item ? <Item item={item} /> : <div>Loading...</div>}
        </div>
    );
}

export default AidtAPI;