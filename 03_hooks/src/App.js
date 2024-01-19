import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import UseEffectCleanup from "./01_useEffect/04_useEffect-cleanup";
import { Container } from "./01_useEffect/05_useEffect-cleanup-example";
import Quiz from "./01_useEffect/quiz";
import Counter from "./practice/practice";
import ReducerFormControl, { Input } from "./02_useReducer/02_reducer-form-control";
import Practice1 from "./practice/practice";


function App() {
  
  const [message, setMessage] = useState("NI hao Ma");
  
  return (
   <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <UseEffectCleanup/> */}
    {/* <Container/> */}
    {/* <Quiz/> */}
    {/* <Counter/> */}

    {/* <UseReducerBasic/> */}

    {/* <UseReducerBasic/> */}
    {/* <Input/> */}

    <Counter/>
    
   </>
  );
}

export default App;
