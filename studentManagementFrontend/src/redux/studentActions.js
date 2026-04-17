import api from "../api/studentApi";

export const getAllStudents=()=>{
    return async(dispatch)=>{
        dispatch({type:"loading"})
        try{
            const response=await api.get("");
            dispatch({
                type:"getAllStudents",
                payload: response.data
            })
        }catch(err){
            console.log(err);
            dispatch({
                type:"error",
                payload:err.message
            })
        }
    }
}

export const getStudentById=(id)=>{
    return async(dispatch)=>{
        dispatch({type:"loading"})
        try{
            const response=await api.get(`/${id}`);
            dispatch({
                type:"getStudentById",
                payload: response.data
            })
        }catch(err){
            console.log(err);
            dispatch({
                type:"error",
                payload:err.message
            })
        }
    }
}


export const addStudent=(student)=>{
    return async(dispatch)=>{
        dispatch({type:"loading"})
        try{
            const response=await api.post(``,student);
            dispatch({
                type:"addStudent",
                payload: response.data
            })
        }catch(err){
            console.log(err);
            dispatch({
                type:"error",
                payload:err.message
            })
        }
    }
}