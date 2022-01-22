import React, { Component } from 'react';
import './Student.css';
import TagsInput from '../TagsInput/TagsInput';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';


export default class Student extends Component {

  state = {
    showMore: false
  }
  showMore() {
    this.setState({ showMore: !this.state.showMore });
  }
  expandGrades(studentData) {
    let gradesArr = studentData.grades;
    if (this.state.showMore === true) {
      return (
        <div>
          {
            gradesArr.map((grade, index) => (
              <Card.Text key={index}>Test {index + 1}: <span className="addWidth" />{grade}%</Card.Text>
            ))
          }
        </div>
      );
    } else {
      return ""
    }
  }

  render() {
    const { studentData, students } = this.props;

    const selectedTags = tags => console.log(tags);

    return (

      <div className="student-card">
        <Row>

          <Card id="card">
            <Col md={3} sm={3} xs={{ order: 'first' }}>
              <img id="studentImg" src={studentData.pic} alt="student avatar" />
            </Col> *
            <Col md={9} sm={9} xs={9}>
              <Card.Body>

                <div id="cardHeader">

                  <Card.Title id="names">{studentData.firstName} {studentData.lastName}
                  </Card.Title>
                  <div
                    id="detailsToggle"
                    onClick={() => { this.showMore() }}
                  >
                    {this.state.showMore ? <RemoveRoundedIcon fontSize="large" color="disabled" /> : <AddRoundedIcon
                      fontSize="large" color="disabled" />}
                  </div>
                </div>
                <div id="cardMainBody">

                  <Card.Text>Email: {studentData.email}</Card.Text>
                  <Card.Text>Company: {studentData.company}</Card.Text>
                  <Card.Text>Skill: {studentData.skill}</Card.Text>
                  <Card.Text>Average: {studentData.average}%</Card.Text>
                </div>

                <TagsInput
                  studentData={studentData}
                  selectedTags={selectedTags}
                  students={students}
                />

                {this.state.showMore && (
                  <div className="expandedCard">{this.expandGrades(studentData)}

                  </div>
                )}


              </Card.Body>

            </Col>


          </Card>
        </Row>
        <div className="event-card__buttons">


        </div>
      </div>
    );
  }

}