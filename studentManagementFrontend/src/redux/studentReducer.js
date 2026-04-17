const initialState = {
    students: [],
    student: null,
    loading: false,
    error: ""
}

function StudentReducer(state=initialState,action){
    switch(action.type){
        case "getStudentById":
            return{
                ...state, 
                loading:false,
                student:action.payload,
                error: ""
            }
        case "getAllStudents":
            return{
                ...state,
                loading:false,
                students:action.payload,
                error: ""
            }
        case "addStudent":
            return{
                ...state,
                students:[...state.students,action.payload],
                loading:false,
                error:""
            }
        case "error":
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case "loading":
            return{
                ...state,
                loading:true,
            }
        default: return state;
    }
}

export default StudentReducer;