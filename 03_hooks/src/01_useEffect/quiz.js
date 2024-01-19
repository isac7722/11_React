import { useEffect, useState } from "react"







const Quiz = ()=>{
    const [input, setInput] = useState("");
    const [isDone, setIsDone] = useState(false);

    const result = "아아아";

    const onChangeHandler = e => {
        setInput(
            e.target.value
        );
    }
    
    useEffect(()=>{
        console.log(input);
        if(input == result){
            setIsDone(r => !r);
        }
        if (isDone === true){
            alert("Congrats")
        }
    },[input])

    useEffect(()=>{
        console.log("isDone2:"+isDone)
        if (isDone === true){
           alert("Congrats")
        }
    },[isDone]);

    return (
        <>
            <h1>퀴즈쇼: 중국의 수도는?</h1>
            <input type="text" name="answer" onChange={onChangeHandler}/>
        </>
    )
}

export default Quiz;

