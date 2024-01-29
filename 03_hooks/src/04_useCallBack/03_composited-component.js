import { useCallback, useEffect, useState } from "react"


const CallBackComponent = () => {
    const [size, setSize] = useState(200);
    const [isDark, SetIsDark] = useState(false);

    const genSquareStyle = useCallback(() => {
        return {
            backgroundColor:"orangered",
            width:size,
            height:size
        }
    },[size]);

    return (
        <>
            <div style={{backgroundColor:isDark?"black":"white"}}>
                <input
                    type="range"
                    min="100"
                    max="300"
                    onChange={e => setSize(parseInt(e.target.value))}/>
                <button onClick={() => SetIsDark(!isDark)}>{isDark.toString()}</button>
                <Square genSquareStyle={genSquareStyle}/>
            </div>
        </>
    )
}

const Square = ({genSquareStyle}) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log("style 변경");
        setStyle(genSquareStyle());
    }, [genSquareStyle]);

    return <div style={style}></div>
}

export default CallBackComponent;