import React, { useState } from "react";
import './TagsInput.css';
import TextField from '@mui/material/TextField';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const TagsInput = props => {
  const [tags, setTags] = useState([]);
  props.studentData.tags = tags;

  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
      props.selectedTags([...tags, event.target.value]);
      console.log(props.studentData);
    }
  };

  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input">
      <ul id="tagsList">
        {tags.map((tag, index) => (
          <li id="tagListItem" key={index}>

            <span
              id="tagName"
            >{tag}
              <CloseRoundedIcon id="closeBtn" fontSize="small" color="action" onClick={() => removeTags(index)} />
            </span>
          </li>
        ))}
      </ul>
      <TextField id="tagInput" variant="standard" type="text"
        onKeyUp={event => addTags(event)}
        placeholder="Add a tag" />
    </div>
  );
};
export default TagsInput;