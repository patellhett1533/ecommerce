import { authConstatnt } from "./constant"

export const login = (user) => {
    return async (dispatch)=>{
        dispatch({ 
            type: authConstatnt.LOGIN_REQUEST,
            payload:{
                ...user
            }
        })
    }
}