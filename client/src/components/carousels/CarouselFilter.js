import React, { useContext, useRef, useEffect } from "react";
import CarouselContext from "../../context/carousel/carouselContext";
import { Form } from "react-bootstrap";
const CarouselFilter = () => {
  const carouselContext = useContext(CarouselContext);
  const text = useRef("");

  const { filterCarousels, clearFilter, filtered } = carouselContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterCarousels(e.target.value);
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
          placeholder="Filter Carousels..."
          onChange={onChange}
          autocomplete="off"
        />
      </Form.Group>
    </Form>
  );
};

export default CarouselFilter;
