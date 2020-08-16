import React, { useContext } from "react";
import PropTypes from "prop-types";
import SyllabContext from "../../context/syllab/syllabContext";
import { Table } from "react-bootstrap";

const SyllabItem = ({ syllab }) => {
  const syllabContext = useContext(SyllabContext);
  const { deleteSyllab, setCurrent, clearCurrent } = syllabContext;

  const { _id, dept, sem, type, syllabus } = syllab;

  const onDelete = () => {
    deleteSyllab(_id);
    clearCurrent();
  };

  return (
    <Table striped bordered hover>
      <tr>
        <td>{dept.toUpperCase()}</td>
        <td>{sem}</td>
        <td>{type.toUpperCase()}</td>
        <td>
          {syllabus ? (
            <a href={syllabus}>
              {" "}
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          ) : (
            "No Link"
          )}
        </td>
        <td>
          <a
            href="/#"
            className="btn btn-dark btn-sm"
            onClick={() => setCurrent(syllab)}
          >
            Edit
          </a>
        </td>
        <td>
          <a href="/#" className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </a>
        </td>
      </tr>
    </Table>
  );
};

SyllabItem.propTypes = {
  syllab: PropTypes.object.isRequired,
};

export default SyllabItem;
