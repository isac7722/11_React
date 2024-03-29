import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Menus from "./page/Menu";
import MenuDetail from "./page/MenuDetail";
import Main from "./page/Main";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="menu">
              <Route index element={<Menus/>}/>
              <Route path=":id" element={<MenuDetail/>}></Route>
              <Route path="regist" element={<MenuRegist/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
 