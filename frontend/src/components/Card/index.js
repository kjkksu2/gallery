import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Card = (props) => {
  const { target, imageSrc, title } = props;

  return (
    <div
      className="card bg-dark"
      data-bs-toggle="modal"
      data-bs-target={`#${target}`}
    >
      <img src={imageSrc} alt="" className="img-fluid" />
      <div className="card-body text-white">
        <h5 className="card-title text-center">{title}</h5>
      </div>
    </div>
  );
};

Card.propTypes = {
  target: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
