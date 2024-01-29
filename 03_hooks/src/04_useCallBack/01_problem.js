import { useEffect, useState } from "react";


const CallBackProblem = () => {

    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const printNumber = () => {
        console.log(`current number : ${number}`);
    }
/* 
    number 또는 toggle state가 변경될 때 함수 생성이 다시 되는 것은 불필요하다.
    하지만 매번 함수가 다시 생성되어 반환되고 useEffect에서는 해당 지역 변수에 변화가 있다고 인지하게 된다.
 */

    useEffect(() => {
        console.log("printNumber 값 변화 인지됨");
    }, [printNumber]); 
    // 렌더링을 기준으로 동작하기 때문에 그냥 실행시키면 단순히 함수 호출문이 되고 리렌더링이 일어나지 않는다.
    // 렌더링된 값이 변경되면 useEffect가 재할당되기 때문에 리렌더링이 발생한다.

    return (
        <>
            <input
                type='number'
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}/>

            <button onClick = {() => setToggle(!toggle)}>{String(toggle)}</button>
            <br/>
            <button onClick = {printNumber}>printNumberState</button>
        </>
    );
}

export default CallBackProblem;



