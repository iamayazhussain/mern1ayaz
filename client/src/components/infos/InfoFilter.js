import React, { useContext, useRef, useEffect } from "react";
import InfoContext from "../../context/info/infoContext";
import { Form } from "react-bootstrap";
const InfoFilter = () => {
  const infoContext = useContext(InfoContext);
  const text = useRef("");

  const { filterInfos, clearFilter, filtered } = infoContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterInfos(e.target.value);
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
          placeholder="Filter News or Info..."
          onChange={onChange}
          autocomplete="off"
        />
      </Form.Group>
    </Form>
  );
};

export default InfoFilter;
