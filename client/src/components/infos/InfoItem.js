import React, { useContext } from "react";
import PropTypes from "prop-types";
import InfoContext from "../../context/info/infoContext";

const InfoItem = ({ info }) => {
  const infoContext = useContext(InfoContext);
  const { deleteInfo, setCurrent, clearCurrent } = infoContext;

  const { _id, tag, title, link, value } = info;

  const onDelete = () => {
    deleteInfo(_id);
    clearCurrent();
  };

  return (
    <div className="card mt-15">
      <div className="card-header">
        <span className="badge badge-primary">
          {tag === "news" ? "News" : "Top Alert"}
        </span>
      </div>
      <div className="card-body">
        <p className="card-text">{title}</p>
        {value ? (
          <a href={link} className="btn btn-primary">
            {value}
          </a>
        ) : (
          ""
        )}
      </div>
      <div class="card-body">
        <a href="/#edit" className="card-link" onClick={() => setCurrent(info)}>
          Edit
        </a>
        <a href="/#delete" className="card-link" onClick={onDelete}>
          Delete
        </a>
      </div>
    </div>
  );
};

InfoItem.propTypes = {
  info: PropTypes.object.isRequired,
};

export default InfoItem;
