import React from "react";

import Carousels from "../infos/Infos";
import CarouselForm from "../infos/InfoForm";
import CarouselFilter from "../infos/InfoFilter";

const Info = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <CarouselForm />
      </div>
      <div className="col-md-12 mt-20">
        <CarouselFilter />
        <Carousels />
      </div>
    </div>
  );
};

export default Info;
