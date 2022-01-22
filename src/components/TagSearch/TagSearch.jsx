import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';



export default class TagSearch extends Component {
  state = {
    query: '',
  }

  handleTagSearch = (suggestion) => {
    this.setState({
      query: suggestion,
    });
    this.props.handleSearch(suggestion);
  }

  render() {
    return (


      <Form id="tagSearch">
        <Form.Group>
          <FloatingLabel controlId="floatingInput"
            label="Search by tag"
          >
            <Form.Control
              type="text"
              placeholder="Search by tag"
              onChange={(event) => this.handleTagSearch(event)} />
          </FloatingLabel>
        </Form.Group>

      </Form>


    )
  }
}