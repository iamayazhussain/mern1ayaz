import React from "react";

import Carousels from "../syllab/Syllabs";
import CarouselForm from "../syllab/SyllabForm";
import CarouselFilter from "../syllab/SyllabFilter";

const Syllabus = () => {
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

export default Syllabus;
