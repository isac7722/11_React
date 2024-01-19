import { useEffect } from "react"

const UseEffectBasic = ({message}) =>{
    /* 
        Hooks는 리엑트 16.8에서 개로 도입된 기능으로 함수 컴포넌트에서 사용 불가능한 생명주기 메소드의 한계점으로 인해 상태관리 및 렌더링 이후 시점 컨트롤 등 다양한 문제를 해결하기 위해
        만든 함수 집합을 의미한다
        그 중 useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 상태를 관리할 수 있게 해준다
        state를 다룰 때 이용을 해봤기 때문에 그 부분은 hooks 챕터에서는 생략한다

        컴포넌트가 렌더링 된 이후에 특정 작업을 수행할 필요가 있다면 클래스형 컴포넌트에서는
        componenentDidMount 혹은 ComponenetDidUpdate 메소드를 이용하면 된다
        하지만, 함수형 컴포넌트에서는 생명주기 API 사용이 불가능하다
        그렇기에 함수형 컴포넌트에서도 렌더링 된 이후 시점에 수행할 내용이 필요한 경우
        사용할 수 있는 기능을 hooks로 제공하고 있고 useEffect이다

        useEffect를 간단하게 사용해서 동작 흐름에 집중해보자.
    */
    
    console.log("랜더링")

    useEffect(()=>{
        console.log("렌더링 이후 동작..");
        console.log(message);

    });

    return(

        <>
        {console.log("랜더링 시 출력")}
        <h1>{message}</h1>

        </>
    );

}

export default UseEffectBasic;