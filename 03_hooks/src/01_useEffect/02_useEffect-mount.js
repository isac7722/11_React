import { useEffect , useState } from "react";

/*  */

const UseEffectMount = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        console.log("마운트 시점에만 동작함");
    },
    [] // 두 번째 인자로 빈 배열을 넣으면 업데이트 시점에는 더 이상 동작하지 않고 마운트 시점 에만 동작
    );

    return (
        <>
            <button onClick={()=> setTime(new Date().toLocaleTimeString())}>
                현재시간 확인하기
            </button>
            <h1>{time}</h1>
        </>
    )
}

export default UseEffectMount;