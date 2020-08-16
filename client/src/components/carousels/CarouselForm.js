import React, { useState, useContext, useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import CarouselContext from "../../context/carousel/carouselContext";

const CarouselForm = () => {
  const carouselContext = useContext(CarouselContext);

  const {
    addCarousel,
    updateCarousel,
    clearCurrent,
    current,
  } = carouselContext;

  useEffect(() => {
    if (current !== null) {
      setCarousel(current);
    } else {
      setCarousel({
        img: "",
        title: "",
        descp: "",
        tag: "main",
        link: "",
        value: "",
      });
    }
  }, [carouselContext, current]);

  const [carousel, setCarousel] = useState({
    img: "",
    title: "",
    descp: "",
    tag: "main",
    link: "",
    value: "",
  });

  const { img, title, descp, tag, link, value } = carousel;

  const onChange = (e) =>
    setCarousel({ ...carousel, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addCarousel(carousel);
    } else {
      updateCarousel(carousel);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Carousel" : "Add Carousel"}
      </h2>

      <Form.Row>
        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img Link"
            name="img"
            value={img}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img Title"
            name="title"
            value={title}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img Description"
            name="descp"
            value={descp}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <div className="form-group col-md-6">
          <select
            id="inputState"
            class="form-control"
            name="tag"
            value={tag}
            onChange={onChange}
          >
            <option selected>Choose...</option>
            <option value="main">Main</option>
            <option value="cse">CSE</option>
            <option value="ce">CE</option>
            <option value="ece">ECE</option>
            <option value="eee">EEE</option>
            <option value="me">ME</option>
            <option value="it">IT</option>
            <option value="mba">MBA</option>
          </select>
        </div>
        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img Link"
            name="link"
            value={link}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img value"
            name="value"
            value={value}
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

export default CarouselForm;
