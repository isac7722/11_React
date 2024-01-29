import { useRef, useState } from "react";


const UseRefCounter = () => {

    console.log("UseRefCounter 렌더링됨");

    const [count, setCount] = useState(0);

    let variable = 0;

    const countRef = useRef(0); // 업데이트 하더라도 렌더링하지 않는다. 메모리단에서 관리, 새로고침하지 않으면(mount를 다시 하지 않는 한) 값 유지

    const increaseCount = () => {
        setCount(count + 1);
    }

    const increaseVariable = () => {
        variable += 1;
        console.log("variable : " + variable);
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log("countRef : " + countRef.current);
    }

    return (
        <>
            <h1>counter : {count}</h1>
            <h1>varible : {variable}</h1>
            <h1>countRef : {countRef.current}</h1>
            <button onClick={increaseCount}>카운트 증가</button>
            <button onClick={increaseVariable}>variable 증가</button>
            <button onClick={increaseCountRef}>카운트 ref 증가</button>
        </>
    )
}

export default UseRefCounter;