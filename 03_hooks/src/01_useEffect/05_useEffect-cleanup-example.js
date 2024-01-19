import { useEffect, useState } from "react"


const Timer = () => {
    useEffect(()=>{
        console.log("타이머가 시작한다.");
        const timer = setInterval(()=>{
            console.log(new Date().toLocaleTimeString());

        },(1000));

        return () =>{
            clearInterval(timer);
            console.log("타이머");
        }
    },[]);

    return <h1>타이머를 시작합니다.</h1>
}

export const Container = () => {
    const [isTrue, setIsTrue] = useState(false);

    return (
        <>
            <button onClick={()=>{setIsTrue(!isTrue)}}>타이머 토글</button>
            {isTrue&&<Timer/>}
        </>
    )
}

// 192.168.0.1

