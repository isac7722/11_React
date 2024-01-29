import { useMemo, useState } from "react";


const hardCalculator = (num) => {
    console.log("어려운 계산기");

    for(let i = 0; i < 1999999999; i++){
        
    }

    return num + 1000000;
}

const easyCalculator = (num) => {
    console.log("쉬운 계산기");

    return num + 1;
}

const UseMemoComponent = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

/*  
    useMemo는 두 번째 인자 값(의존성 배열)이 변경될 때만 값을 재계산하고 그렇지 않으면 이전 값을 메모리에 저장했다가 꺼내서 그대로 사용한다.
    위의 경우 useMemo 때문에 쉬운 계산을 연산할 경우 어려운 계산은 이전 값(기존 메모리에 있는 값)을 그대로 사용하기 때문에 연산하지 않는다.
    그래서 빠르게 동작할 수 있다.
    -> useEffect와 비슷하게 동작할 것처럼 보이나 useEffect는 언제 렌더링할지 결정할 뿐이고 연산은 전부 다시하기 때문에 동작이 느리다.
 */

    const hardSum = useMemo(() => {
        return hardCalculator(hardNumber);
    },[hardNumber]) ;
    const easySum = useMemo(() => {
        return easyCalculator(easyNumber);
    }, [easyNumber]);

    return (
        <>
            <input
                type="number"
                value={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}
                />
            <span>+1000000 = {hardSum}</span>
            <h3>쉬운 계산기</h3>
            <input
            type="number"
            value={easyNumber}
            onChange={e => setEasyNumber(parseInt(e.target.value))}
            />
            <span>+1 = {easySum}</span>
        </>
    )
}

export default UseMemoComponent;

// exports는 여러 개의 함수를 배열로 내보냄