import React from "react";
import PropTypes from "prop-types";
import { IoLocation } from "react-icons/io5";

const Marker = ({ text, onClick }) => (
  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-black border-2 border-white rounded-full select-none transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:z-10">
    <img
      className="w-full h-full"
      src={"logo512.png"}
      alt={text}
      onClick={onClick}
    />
  </div>
);

export default Marker;
