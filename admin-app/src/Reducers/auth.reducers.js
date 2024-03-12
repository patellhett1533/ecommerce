import { authConstatnt } from "../Actions/constant"

const initState = {
    name : "het"
}

export default (state = initState, action) => {

    console.log(action);

    switch(action.type){
        case authConstatnt.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            }
            break;
    }

    return state;
}