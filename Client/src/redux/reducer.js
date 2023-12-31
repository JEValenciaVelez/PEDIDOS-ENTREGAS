import { GET_EMPLOYEE, GET_EMPLOYEES, GET_USER, GET_USERS, GET_USER_LOGIN } from "./types";

const initialState = {
    users: [],
    user:{},
    login:'',
    employee:{},
    employees:[]
};

export function rootReducer(state= initialState , {type, payload}){

    switch(type){

        case GET_USER:
            return {
                ...state,
                user: payload
            }

        case GET_USERS:
            return {
                ...state,
                users: payload
            }

        case GET_EMPLOYEE:
            return {
                ...state,
                employee: payload
            }

        case GET_EMPLOYEES:
            return {
                ...state,
                employees: [...state.employees, ...payload]
            }

        case GET_USER_LOGIN:
            return {
                ...state,
                login: payload
            }

        default:
            return state

    }

}

