import { useState, useEffect } from "react";

const UseEffectUpdate = () => {
    const[user, setUser] = useState({
        username: '',
        password: ''
    });

    const onChangeHandler = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    };

    useEffect(()=>{
        console.log("username update");
    },[user.username]);

    useEffect(()=>{
        console.log("password update");
    },[user.password]);

    return (
        <>
            <lable>username: </lable>
            <input type="text" name="username" onChange={onChangeHandler}/>
            <br/>
            <label>password : </label>
            <input type="password" name="password" onChange={onChangeHandler}/>
            <h3>username : {user.username}</h3>
            <h3>password : {user.password}</h3>
        </>
    )

}

export default UseEffectUpdate;