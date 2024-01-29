import { useState, useEffect } from "react"

/* 
    useEffect는 기본적으로 마운트된 시점과 업데이트된 시점 두 가지 모두 동작하게 된다.
    마운트 */
const UseEffectMount = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("마운트 시점에만 동작함");
    },
    []// 두 번째 인자로 빈 배열을 넣으면 업데이트 시점에는 더 이상 동작하지 않고 마운트 시점(렌더링 이후)에만 동작, 배열에 무언가 들어간다면 그 동작을 업데이트 시점에서 동작
    );

    return (
        <>
            <button onClick={() => setTime(new Date().toLocaleTimeString())}>
                현재시간 확인하기</button>
            <h1>{time}</h1>
            </>
    )
}

export default UseEffectMount;