import React, { Component, useState } from 'react';
import axios from '../../axios';


import StudentsList from '../StudentsList/StudentsList';
import NameSearch from '../NameSearch/NameSearch';
import TagSearch from '../TagSearch/TagSearch';


export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Students: [],
      value: '',
      tagValue: '',
    };
  }
  calculateAverage(array) {
    var total = 0;
    var count = 0;
    array.forEach(function (item, index) {
      total += item;
      count++;
    });
    return total / count;
  }
  getStudentData() {
    axios
      .get(`/`, {})
      .then(res => {
        const data = res.data.students;
        const newArr = data.map((v => ({ ...v, average: this.calculateAverage(v.grades.map(Number)), tags: [] })));
        console.log(newArr);
        const students = newArr;
        this.setState({ Students: students })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getStudentData();
  }

  handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    this.setState({ value: value });
  }

  handleTagSearch = (event) => {
    let tagValue = event.target.value.toLowerCase();
    this.setState({ tagValue: tagValue });
  }

  nameFiltered = () =>
    this.state.Students
      .filter((student) =>
        student.firstName.toLowerCase().includes(this.state.value) ||
        student.lastName.toLowerCase().includes(this.state.value));

  tagFiltered = () =>
    this.state.Students
      .filter(student => student.tags
        .some(tag => tag.toLowerCase().includes(this.state.tagValue))
      )
      .map(student => {
        let n = Object.assign({}, student, {
          'tags': student.tags.filter(
            tag => tag.toLowerCase().includes(this.state.tagValue)
          )
        })
        return n;
      });

  filterStudents = () => {
    if (this.state.value === "" && this.state.tagValue === "") {
      return this.state.Students
    } else if (this.state.tagValue != "") {
      return this.tagFiltered()
    } else if (this.state.value != "") {
      return this.nameFiltered()
    }
  }

  render() {

    const filteredStudents = this.filterStudents();


    return (
      <div>
        <NameSearch handleSearch={this.handleSearch}></NameSearch>
        <TagSearch handleSearch={this.handleTagSearch}></TagSearch>

        <StudentsList students={filteredStudents}>
        </StudentsList>
      </div>
    )
  }
}