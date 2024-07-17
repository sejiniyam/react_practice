import React from "react";
import './User.css';

function CreateUser({username, email, onCreate, onChange}) {
    return (
        <>
        <input name="username" placeholder="계정명" onChange={onChange} value={username}/>
        <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
        <button onClick={onCreate}>등록</button>
        </>
    );
}

export default CreateUser;