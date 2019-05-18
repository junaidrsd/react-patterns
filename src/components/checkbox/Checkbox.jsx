import React from 'react';
import PropTypes from 'prop-types';

/*
 Render a checkbox with label
*/

const Checkbox = (props) => {
  const onChange = (e) => {
    if (props.onChange) props.onChange(e);
  };
  return (
    <div className="te-checkbox">
      <label htmlFor={props.id}>
        <input
          id={props.id}
          name={props.id}
          type="checkbox"
          checked={props.checked}
          onChange={(e) => onChange(e)}
          disabled={props.disabled}
          />
        {props.label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
};

export default Checkbox;
