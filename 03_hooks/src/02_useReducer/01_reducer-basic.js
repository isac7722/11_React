import { useReducer, useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(r => r + 1);
    }

    const minus = () => {
        setCount(r => r - 1);
    }

    return (
        <>
            <h1>counter : {count} </h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}

const reducer = (state, action) => { // 이건 리듀서 함수이지 그 자체가 아님
    switch(action.type){
        case 'DECREMENT':
            return {value : state.value - 1}
        case 'INCREMENT':
            return {value : state.value + 1}
        default :
            return state;
    }
}

export const UseReducerBasic = () => {
    const [state, dispatch] = useReducer(reducer, {value:0}); // dispatch에 reducer가 들어가고, state에 {value:0}이 객체로 들어감
    return (
        <>
            <h1>counter : {state.value}</h1>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button> {/* dispatch는 매개변수로 {type:'DECREMENT'}를 받는다. */}
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
        </>
    )
}