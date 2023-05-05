import React from "react";
import PropTypes from "prop-types";

const testing = (props) => {
  return (
    <div>
      <Setup />
    </div>
  );
};

testing.propTypes = {
  name: PropTypes.array.isRequired,
};

export default testing;
