import axios from 'axios'
import { LOGIN_AS_EMPLOYEE_FAIL, LOGIN_AS_EMPLOYEE_REQUEST, LOGIN_AS_EMPLOYEE_SUCCESS, REGISTER_AS_EMPLOYEE_FAIL, REGISTER_AS_EMPLOYEE_REQUEST, REGISTER_AS_EMPLOYEE_SUCCESS } from '../ActionType'


//Login As A Employee:-
export const loginAsEmployee = (employee_id, employee_password) => async(dispatch) =>{
    try{
        dispatch({
            type: LOGIN_AS_EMPLOYEE_REQUEST
        })
        const config = { headers: { "Content-type": "application/json" } }
        const { data } = await axios.post("/api/v1/user/login", { employee_id, employee_password }, config)
        dispatch({
            type: LOGIN_AS_EMPLOYEE_SUCCESS,
            payload: data.user
        })
    }catch(error){
        dispatch({
            type: LOGIN_AS_EMPLOYEE_FAIL,
            payload: error.response.data.message
        })
    }
}

//register employee:-
export const RegisterAsEmployee = (employee_id, employee_name,employee_designation,employee_department,employee_location,employee_password ,employee_email) => async(dispatch) =>{
    try{
        dispatch({
            type: REGISTER_AS_EMPLOYEE_REQUEST
        })
        const config = { headers: { "Content-type": "application/json" } }
        const { data } = await axios.post("/api/v1/register", {employee_id, employee_name,employee_designation,employee_department,employee_location,employee_password ,employee_email }, config)
        dispatch({
            type: REGISTER_AS_EMPLOYEE_SUCCESS,
            payload: data.user
        })
    }catch(error){
        dispatch({
            type: REGISTER_AS_EMPLOYEE_FAIL,
            payload: error.response.data.message
        })
    }
}




