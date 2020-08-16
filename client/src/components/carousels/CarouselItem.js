import React, { useContext } from "react";
import PropTypes from "prop-types";
import CarouselContext from "../../context/carousel/carouselContext";

const CarouselItem = ({ carousel }) => {
  const carouselContext = useContext(CarouselContext);
  const { deleteCarousel, setCurrent, clearCurrent } = carouselContext;

  const { _id, img, title, descp, tag } = carousel;

  const onDelete = () => {
    deleteCarousel(_id);
    clearCurrent();
  };

  return (
    <div class="card mt-20">
      <img class="card-img-top img-fluid" src={img} alt="Card image cap" />

      <div className="card-body">
        <h5 className="card-title ">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted uppercase">{tag}</h6>
        <p className="card-text">{descp}</p>
        <a href="#" className="card-link" onClick={() => setCurrent(carousel)}>
          Edit
        </a>
        <a href="#" className="card-link" onClick={onDelete}>
          Delete
        </a>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  carousel: PropTypes.object.isRequired,
};

export default CarouselItem;
