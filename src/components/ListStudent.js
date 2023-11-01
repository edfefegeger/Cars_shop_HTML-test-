import React, { useState } from 'react';
import SearchLabel from './SearchLabel';
import './ListStudent.css';

function Student(props) {
    const { id, firstName, lastName, email, img, ipAdress, onDelete, style } = props;
    

    function handleDelete() {
        onDelete(id);
    }

    return (
        <div className={"col-4 p-1 border border-warning border-2 rounded-5"} id='student'>
            <img className="m-2 border border-danger border-2 rounded" src={img} alt="student" id='img_some' />
            <div className="text-center">
                <p>{lastName} {firstName}</p>
                <p>{email}</p>
                <p>{ipAdress}</p>
                <div className="container text-left">
                <style>{style}</style>
                    <button onClick={handleDelete}>BUY!!!</button>
                </div>
            </div>
        </div>
    );
}

function ListStudent({ Array }) {
    const [students, setStudents] = useState(Array);

    function deleteStudent(id) {
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents);
    }

    function reloadList(newArray) {
        setStudents(newArray);
    }

    return (
        <div className="container-fluid">
            {/* Передаем функцию reloadList в компонент SearchLabel */}
            <SearchLabel personArray={Array} reloadList={reloadList} />

            <div className="row">
                {students.map(student => (
                    <Student key={student.id} {...student} onDelete={deleteStudent} />
                ))}
            </div>
        </div>
    );
}

export default ListStudent;
