import { useState } from "react";
/* 
    목적 : 많은 연산이 수행되는 문제로 인해 화면에 렌더링이 늦어진다.
    의문 : 그렇다면 setTimeout으로 루프를 막아버리면?

    useMemo를 쓰지 않고 현재 이 스크립트를 그대로 시행할 경우, for문이 반복적으로 동작해 간단한 계산을 실행할 때조차 많은 연산으로 인해
    렌더링이 늦어진다.

    for문은 동작동안 쓰레드를 점유, timeout은 이벤트 루프에 집어넣고 대기, 다른 연산이 끝난 후 동작 -> 연산 속도가 다른 이유
*/

const hardCalculator = (num) => {

    // event loop는 영향을 받지 않는다.
    // react는 자식 요소에 promise를 가질 수 없다.
    // setTimeout(()=>{return 199999999}, 3000);

    for (let i = 0; i < 199999999; i++){
        // blank
    }

    return 0;
}


const HardCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);

    return (
        <>
            <h3>어려운 계산기</h3>
            <input type='number'
                value={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}/>
                <span>+199999999 = {hardSum}</span>
        </>
    );
}

export default HardCalculator;