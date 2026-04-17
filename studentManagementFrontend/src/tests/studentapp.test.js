import { thunk } from "redux-thunk";
import StudentReducer from "../redux/studentReducer";
import { createStore, applyMiddleware } from 'redux';
import api from "../api/studentApi";
import store from "../store";
import { getAllStudents, getStudentById, addStudent } from "../redux/studentActions";

jest.mock('../api/studentApi', () => (
    {
        __esmodule: true,
        // default: {
            get: jest.fn(),
            post: jest.fn()
        // }
    }
))

describe("Integration test for student actions with middleware thunk using jest", () => {
    // let store;

    // beforeEach(() => {
    //     store = createStore(StudentReducer, applyMiddleware(thunk));
    // })

    test("get all students", () => {
        const students = [
            { id: 1, sname: "Mohit", course: "Java" },
            { id: 2, sname: "Gaurav", course: "C" },
            { id: 3, sname: "Rajat", course: "Python" }
        ]
        // console.log("api ",api)
        // console.log("api get ",api.get)
        api.get.mockResolvedValue({ data: students })

        const state = store.getState();
        store.dispatch(getAllStudents());

        expect(api.get).toHaveBeenCalledTimes(1);
        expect(state.students).toEqual(students);
        expect(state.loading).toBe(false);
        expect(state.error).toBe("");
    })
    
    // test("to get error in all students", () => {
    //     api.post.mockRejectedValue(new Error("api failed"))

    //     store.dispatch(getAllStudents());
    //     const state = store.getState();

    //     expect(api.get).toHaveBeenCalledTimes(1);
    //     expect(state.students).toEqual([]);
    //     expect(state.loading).toBe(false);
    //     expect(state.error).toBe("api failed");
    // })
    
    // test("add student", () => {
    //     const student = { sname: "Mohit", course: "Java" };
    //     api.post.mockResolvedValue({data:student})

    //     store.dispatch(addStudent(student));
    //     const state = store.getState();

    //     expect(api.post).toHaveBeenCalledTimes(1);
    //     expect(api.post).toHaveBeenCalledWith("",student);
    //     expect(state.students).toEqual([student]);
    //     expect(state.loading).toBe(false);
    //     expect(state.error).toBe("");
    // })
    
    // test("add student error", () => {
    //     const student = { sname: "Mohit", course: "Java" };
    //     api.post.mockRejectedValue(new Error("Unable to add student"))

    //     store.dispatch(addStudent(student));
    //     const state = store.getState();

    //     expect(api.post).toHaveBeenCalledTimes(1);
    //     expect(api.post).toHaveBeenCalledWith("",student);
    //     expect(state.students).toEqual([]);
    //     expect(state.loading).toBe(false);
    //     expect(state.error).toBe("Unable to add student");
    // })
})