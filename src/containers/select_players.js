import React from "react";

const SelectPlayers = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <p>Select players:</p>
        <select className="form-control">
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="btn btn-primary">
          Start
        </button>
      </div>
    </div>
  );
};

export default SelectPlayers;
