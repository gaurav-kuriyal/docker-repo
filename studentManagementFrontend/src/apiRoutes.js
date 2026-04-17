import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import StudentList from "./components/studentList";
import StudentDetails from "./components/studentDetails";
import AddStudent from "./components/addStudent";

export function ApiRoutes(){
    return(<>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/students" element={<StudentList/>} ></Route>
            <Route path="/students/:id" element={<StudentDetails/>} ></Route>
            <Route path="/add" element={<AddStudent />} ></Route>
        </Routes>
    </>)
}