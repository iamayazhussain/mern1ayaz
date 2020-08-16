import React, { useState, useContext, useEffect } from "react";
import InfoContext from "../../context/info/infoContext";
import { Form, Col } from "react-bootstrap";

const InfoForm = () => {
  const infoContext = useContext(InfoContext);

  const { addInfo, updateInfo, clearCurrent, current } = infoContext;

  useEffect(() => {
    if (current !== null) {
      setInfo(current);
    } else {
      setInfo({
        tag: "",
        title: "",
        link: "",
        value: "",
      });
    }
  }, [infoContext, current]);

  const [info, setInfo] = useState({
    tag: "",
    title: "",
    link: "",
    value: "",
  });

  const { tag, title, link, value } = info;

  const onChange = (e) => setInfo({ ...info, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addInfo(info);
    } else {
      updateInfo(info);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? "Edit Info" : "Add Info"}</h2>

      <Form.Row>
        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="News Link"
            name="link"
            value={link}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Value ??"
            name="value"
            value={value}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>
        <div className="form-group col-md-6">
          <select
            id="inputState"
            class="form-control"
            name="tag"
            onChange={onChange}
          >
            <option selected>Choose...</option>
            <option value="topalert">Top Alert</option>
            <option value="news">News</option>
          </select>
        </div>
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

export default InfoForm;
