import React from 'react';
import PropTypes from 'prop-types';

/*
 Render a checkbox with label
*/

const Checkbox = () => {
  return (
    <div className="te-checkbox">
      <input type="checkbox" />
    </div>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  children: null
};

export default Checkbox;
