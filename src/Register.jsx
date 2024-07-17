import React, { useRef, useState } from "react";
import './User.css';
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function Register() {
    // 회원 정보 입력 받기
    const [ inputs, setInputs ] = useState({
        username : '',
        email : ''
    });

    // 구조분해 할당
    const { username, email } = inputs;

    // input 값..
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    // 입력 받은 회원 정보
    const [ users, setUsers ] = useState([
        {
            id : 1,
            username : 'sejin',
            email : 'sejin@gmail.com',
            active : true
        },
        {
            id : 2,
            username : 'sky',
            email : 'sky@gmail.com',
            active : true
        },
        {
            id : 3,
            username : 'eddy',
            email : 'eddy@gmail.com',
            active : false
        },
        {
            id : 4,
            username : 'rose',
            email : 'rose@gmail.com',
            active : false
        }
    ]);

    // useRef 이용해서 컴포넌트 안에 변수 만들기
    const nextId = useRef(5);
    // 등록 버튼 클릭 시
    const onCreate = (e) => {
        console.log("등록하지롱");
        console.log(`계정명 : ${inputs.username}`);
        console.log(`이메일 : ${inputs.email}`);

        const newUser = {
            id : nextId.current,
            username,
            email
        };

        // 새 회원 값 저장
        setUsers([...users, newUser]);

        setInputs({
           username : '',
           email : ''
        });
        nextId.current += 1;
    };

    // 삭제 버튼 클릭 시
    const onRemove = (id) => {
        console.log("삭제하지롱");
        // filter 메서드는 "특정 조건을 충족하는 요소만"을 포함하는 배열을 "새로" 생성한다
        // = user.id 랑 id랑 같지 않은 것들을 배열로 만든다
        // = id가 2라면, user.id가 2인 사용자를 제외한 "나머지 사용자들로 구성된 배열이 새로" 만들어진다
        // = 따라서, user.id가 id인 것을 제거하는 셈
        setUsers(users.filter(user => user.id !== id));
    };

    // 색상 수정하기
    const onToggle = (id) => {
        console.log("수정하지롱");
        setUsers(
            users.map(user => user.id == id ?
                {...user, active : !user.active} : user
            ));
    };

    return (
        <>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/><br />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    );
}

export default Register;