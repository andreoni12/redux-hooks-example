import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {
    const courses = useSelector(state => state.courses.data);
    const dispatch = useDispatch();
    const [newCourse, setNewCourse] = React.useState('');

    function addCourse() {
        dispatch({ type: 'ADD_COURSE', title: newCourse});
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <input type="text" onChange={({target}) => setNewCourse(target.value)} />
            <button type="button" onClick={addCourse}>Add Course</button>
        </>
    )
}
