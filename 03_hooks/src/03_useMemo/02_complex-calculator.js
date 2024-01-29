import { useState } from "react";


const hardCalculator = (num) => {
    console.log("어려운 계산기");

    for(let i = 0; i < 1999999999; i++){
        
    }

    return num + 10000;
}

const easyCalculator = (num) => {
    console.log("쉬운 계산기");

    return num + 1;
}
// 쉬운 계산을 하는데도 어려운 계산을 같이 렌더링해서 연산이 느려진다.

const ComplexCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);
    const easySum = easyCalculator(easyNumber);

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

export default ComplexCalculator;