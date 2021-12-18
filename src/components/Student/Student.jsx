import React, { useState } from 'react';
import './Student.css';
import { TagsInput } from '../TagsInput/TagsInput';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';


export function Student({ studentData, students, setStudentTags, setDisplayStudents }) {
  let [isExpanded, setExpanded] = useState(false);

  return (
    <div className="student-card">
      <Row>
        <Card id="card">
          <Col md={2} sm={2} xs={{ order: 'first' }}>
            <img id="studentImg" src={studentData.pic} alt="student avatar" />
          </Col> *
          <Col md={10} sm={10} xs={10}>
            <Card.Body>

              <div id="cardHeader">

                <Card.Title id="names">{studentData.firstName} {studentData.lastName}
                </Card.Title>
                <div
                  id="detailsToggle"
                  onClick={() => setExpanded(!isExpanded)}
                >
                  {isExpanded ? <RemoveRoundedIcon fontSize="large" color="disabled" /> : <AddRoundedIcon
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
                setStudentTags={setStudentTags}
                setDisplayStudents={setDisplayStudents}
              />

              {isExpanded && (
                <div className="expandedCard">
                  <Card.Text>Test 1: <span className="addWidth" />{studentData.grades[0]} %</Card.Text>
                  <Card.Text>Test 2: <span className="addWidth" />{studentData.grades[1]} %</Card.Text>
                  <Card.Text>Test 3: <span className="addWidth" />{studentData.grades[2]} %</Card.Text>
                  <Card.Text>Test 4: <span className="addWidth" />{studentData.grades[3]} %</Card.Text>
                  <Card.Text>Test 5: <span className="addWidth" />{studentData.grades[4]} %</Card.Text>
                  <Card.Text>Test 6: <span className="addWidth" />{studentData.grades[5]} %</Card.Text>
                  <Card.Text>Test 7: <span className="addWidth" />{studentData.grades[6]} %</Card.Text>
                  <Card.Text>Test 8: <span className="addWidth" />{studentData.grades[7]} %</Card.Text>
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