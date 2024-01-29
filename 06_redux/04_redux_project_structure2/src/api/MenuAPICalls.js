import { getMenuList } from "../modules/MenuModules";
import { request } from "./API";

export function callGetMenuListAPI(){
    console.log("getMenuList api calls ");

    return async (dispath, getState) =>{
        const result = await request("get", "/menu");
        console.log("getMenulist result ;", result)

        dispath(getMenuList(result));
    }
}
