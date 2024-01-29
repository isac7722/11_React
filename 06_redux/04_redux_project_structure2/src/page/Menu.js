import { useNavigate } from "react-router-dom";


const Menus = () =>{
    const loginStatus = !!localStorage.getItem("isLogin");
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                메뉴목록
                    {
                        ((loginStatus) && <button onClick={()=> navigate("/menu/regist")}>메뉴추가</button>)
                    }
            </h1>
            <MenuList/>
        </div>
    )
}

export default Menus;