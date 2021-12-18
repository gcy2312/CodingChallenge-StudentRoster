import React from 'react';
import { Student } from '../Student/Student';
import './StudentsList.css';


export function StudentsList({ displayStudents, setStudentTags, setDisplayStudents }) {

  return (
    <div>
      <ul className="studentsList">
        {displayStudents.map((student) => (
          <li key={student.id} className="studentsList__item">
            <Student
              studentData={student}
              // students={students}
              setStudentTags={setStudentTags}
              setDisplayStudents={setDisplayStudents}
            />
          </li>
        ))}
      </ul>

    </div>
  );
}