import { useEffect, useState } from "react";

const Quiz = () => {
    const answer = '플루토';

    const [input, setInput] = useState("");
    const [isDone, setIsDone] = useState(false);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const correct = input => {
        if(input == answer){
            setIsDone(true);
        }else if(input != answer){
            setIsDone(false);
        }
    };
    
    useEffect(() => {
        if(isDone){
            alert("정답입니다.");
        }else{
            alert("환영합니다.");
            console.log("힌트는 그리스 로마 신화에 등장하는 저승의 신의 영문식 이름과 같습니다.");
        }
    },[isDone]);

    return (
        <>
            <h3>Q. 태양계의 9번째 행성에서 쫒겨난 명왕성의 영문식 이름을 한글로 작성해주세요.</h3>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={() => correct(input)}>확인</button>
        </>
    )
}

export default Quiz;