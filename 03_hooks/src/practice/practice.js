import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


function action(state, value){
   console.log(value)
    return {
        ...state,
        [value.name]: value.value
    }

}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 10);

  const [name, action1] = useReducer(action, "김진성");

//   const onIncrease = () => {
//     ;
//   };

//   const onDecrease = () => {
//     ;
//   };

const onChangeHandler = e => action1(e.target);

  return (
    <>
        <div>
        <h1>{number}</h1>
        <button onClick={()=>dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={()=>dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>

        <div>
            <h1>{name}</h1>
            <input type='text' name='word' placeholder='아무단어나 입력하세요' onChange={onChangeHandler}/>
        </div>
    </>
    
  );
}

export default Counter;