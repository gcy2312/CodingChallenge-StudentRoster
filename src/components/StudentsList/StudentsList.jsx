import React, { Component } from 'react';
import Student from '../Student/Student';
import './StudentsList.css';



export default class StudentsList extends Component {

  // console.log(students);


  render() {
    const { students } = this.props;

    return (
      <div>
        {students.map((student) => (
          <div key={student.id}>
            <Student
              studentData={student}
              students={students}
            >
            </Student>
          </div>
        ))}

      </div>
    )
  }
}