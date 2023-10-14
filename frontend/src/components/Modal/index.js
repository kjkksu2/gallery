import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Modal = (props) => {
  const { id, imageSrc } = props;

  return (
    <div className="modal fade" id={id}>
      <div className="modal-dialog">
        <div className="modal-content text-dark">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
            <div className="image-container w-100">
              <img src={imageSrc} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Modal;
