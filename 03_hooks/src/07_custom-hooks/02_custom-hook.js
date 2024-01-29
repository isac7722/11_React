import { useState } from "react"


const useInput = () => {
    const [value, setValue] = useState("");

    const onChange = e => setValue(e.target.value);

    return {value, onChange}
}

const CustomHooks = () => {
    const name = useInput();
    const pass = useInput();
    const email = useInput();

    return (
        <div>
            <label>이름 : </label>
            <input type="text" name={name.value} onChange={name.onChange}/>
            <br/>
            <label>비밀번호 : </label>
            {/* input의 속성과 객체의 key가 일치하면 아래와 같이 축약표현이 가능하다. */}
            <input type="password" {...pass}/>
            <br/>
            <label>이메일 : </label>
            <input type="email" {...email}/>
            <br/>
            <h4>name : {name.value}</h4>
            <h4>password : {pass.value}</h4>
            <h4>email : {email.value}</h4>
        </div>
    )
}

export default CustomHooks;