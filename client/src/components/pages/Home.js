import React from "react";

import Carousels from "../carousels/Carousels";
import CarouselForm from "../carousels/CarouselForm";
import CarouselFilter from "../carousels/CarouselFilter";

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <CarouselForm />
      </div>

      <div className="col-md-6 pt-45">
        <CarouselFilter />
        <Carousels />
      </div>
    </div>
  );
};

export default Home;
