import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../redux/studentActions";
import { Link } from "react-router-dom";

export default function AddStudent() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    const [student, setStudent] = useState({
        sname: "",
        course: ""
    })

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(student));
        setStudent({
            sname: "",
            course: ""
        })
    }


    return (<>
        <div>
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="sname" className="form-label">Name</label>
                    <input type="text" className="form-control" name="sname" value={student.sname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="course" className="form-label">Course</label>
                    <input type="text" className="form-control" name="course" value={student.course} onChange={handleChange} />
                </div>

                <button className="btn btn-primary" >Add</button>
            </form>

            {loading && <h3>Loading...</h3>}
            {error && <h3>Error...</h3>}
            <Link to="/">Home</Link>
        </div>
    </>)
}