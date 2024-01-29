import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../components/items/Menus";


const MenuDetail = () => {
    const loginStatus = !!localStorage.getItem("isLogin");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const result = useSelector(state => state.menuReducer);

    const updateHandler = () => navigate(`/menu/modify/${id}`);
    const deleteHandler = () => dispatch(callDeleteMenuAPI(id));

    useEffect(()=>{
        if (result.delete){
            alert("메뉴삭제");
            navigate("/menu");
        }
    },[result]);

    return (
        <div>
            <h1>메뉴상세</h1>
            <h1>
                {
                    (loginStatus) && 
                    <>
                        <button onClick={updateHandler}>메뉴수정</button>
                        <button onClick={deleteHandler}>메뉴삭제</button>
                    </>
                }
            </h1>
            <Menu id={id}/>
        </div>
    )
}

export default MenuDetail;
