import React, { useState } from "react";

function Info() {
    
    // 상태 객체의 키
    const [ info, setInfo ] = useState({
        name: '',
        birth: '',
        country: '',
        bio: ''
    });

    const { name, birth, country, bio } = info;
    const onChangeInfo = (e) => {
        // 이벤트 객체에서 추출한 값
        const { value, name } = e.target;
        setInfo({
            ...info,
            [name] : value
        });
    }

    return (
        <div>
        <div>
          <input
            name="name"
            value={name}
            onChange={onChangeInfo}
            placeholder={"이름"}
          ></input>
          {name}
        </div>
        <div>
          <input name="birth" value={birth} onChange={onChangeInfo} type="date" />
          {birth}
        </div>
        <div>
          <select name="country" value={country} onChange={onChangeInfo}>
            <option value=""></option>
            <option value={"kr"}>한국</option>
            <option value={"us"}>미국</option>
            <option value={"uk"}>영국</option>
          </select>
          {country}
        </div>
  
        <div>
          <textarea name="bio" value={bio} onChange={onChangeInfo}></textarea>
          {bio}
        </div>
      </div>
    );
}

export default Info;