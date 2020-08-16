import React, { useState, useContext, useEffect } from "react";
import SyllabContext from "../../context/syllab/syllabContext";
import { Col, Form } from "react-bootstrap";

const SyllabForm = () => {
  const syllabContext = useContext(SyllabContext);

  const { addSyllab, updateSyllab, clearCurrent, current } = syllabContext;

  useEffect(() => {
    if (current !== null) {
      setSyllab(current);
    } else {
      setSyllab({
        dept: "",
        sem: "",
        type: "",
        syllabus: "",
      });
    }
  }, [syllabContext, current]);

  const [syllab, setSyllab] = useState({
    dept: "",
    sem: "",
    type: "",
    syllabus: "",
  });

  const { dept, sem, type, syllabus } = syllab;

  const onChange = (e) =>
    setSyllab({ ...syllab, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addSyllab(syllab);
    } else {
      updateSyllab(syllab);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Syllabus" : "Add Syllabus"}
      </h2>

      <Form.Row>
        <div className="form-group col-md-6">
          <select
            id="inputState"
            class="form-control"
            name="dept"
            value={dept}
            onChange={onChange}
          >
            <option selected>Department...</option>
            <option value="cse">CSE</option>
            <option value="ce">CE</option>
            <option value="ece">ECE</option>
            <option value="eee">EEE</option>
            <option value="me">ME</option>
            <option value="it">IT</option>
            <option value="mba">MBA</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <select
            id="inputState"
            class="form-control"
            name="sem"
            value={sem}
            onChange={onChange}
          >
            <option selected>Choose...</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="mIII">IIII</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <select
            id="inputState"
            class="form-control"
            name="type"
            value={type}
            onChange={onChange}
          >
            <option selected>Choose...</option>
            <option value="aicte">AICTE</option>
            <option value="cbcs">CBCS</option>
          </select>
        </div>
        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="syllabus Link"
            name="syllabus"
            value={syllabus}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <div>
          <input
            type="submit"
            value={current ? "Update Carousel" : "Add Carousel"}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </Form.Row>
    </Form>
  );
};

export default SyllabForm;
