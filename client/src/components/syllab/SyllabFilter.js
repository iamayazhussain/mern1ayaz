import React, { useContext, useRef, useEffect } from "react";
import SyllabContext from "../../context/syllab/syllabContext";
import { Form } from "react-bootstrap";

const SyllabFilter = () => {
  const syllabContext = useContext(SyllabContext);
  const text = useRef("");

  const { filterSyllabs, clearFilter, filtered } = syllabContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterSyllabs(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Control
          ref={text}
          type="text"
          placeholder="Filter Syllabus..."
          onChange={onChange}
          autocomplete="off"
        />
      </Form.Group>
    </Form>
  );
};

export default SyllabFilter;
