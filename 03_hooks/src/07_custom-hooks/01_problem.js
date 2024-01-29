import { useState } from "react"


const HooksProblem = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // 이벤트 핸들러 각각 작성
    /* 
        이벤트 핸들러가 처리하는 일이 동일하지 않다면 custom-hooks를 고려하지 않아도 된다.
        그리고 일반 input 태그들의 이벤트 핸들러는 유효성 검사 목적으로 각각 따로 작성할 일들이 있다.
    */

    // const handleName = (e) => {
    //     setName(e.target.value);
    //     if(e.target.value.match(/[가-힣]+/)){ // 정규표현식 객체도 자바스크립트에서는 일반 객체로 취급한다. 한글만 취급하겠다.
    //         console.log("한글 잘 입력하고  있네~")
    //     }
    // }

    // const handlePassword = (e) => {
    //     setPassword(e.target.value);
    //     if(e.target.value.length >= 10){
    //         console.log("비밀번호 10 자리 이상 잘 입력했네~")
    //     }
    // }

    // const handleEmail = (e) => setEmail(e.target.value);

    // 아래의 경우 함수가 처리하는 내용이 동일하기 때문에 행위를 공통적으로 처리할 수 있다.
    const handleName = (e) => setName(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);


    return (
        <div>
            <label>이름 : </label>
            <input type="text" onChange={handleName}/>
            <br/>
            <label>비밀번호 : </label>
            <input type="password" onChange={handlePassword}/>
            <br/>
            <label>이메일 : </label>
            <input type="email" onChange={handleEmail}/>
            <br/>
            <h4>name : </h4>
            <h4>password : </h4>
            <h4>email : </h4>
        </div>
    )
}

export default HooksProblem;