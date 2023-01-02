import React from 'react';
import PropTypes from 'prop-types';
import "./Checkbox.css"

const Like = ({ type = 'button', name, checked=false, onClick }) => (
  <input type={type} name={name} className='tag' value={name} checked={!checked} onClick={onClick}  style={{
    backgroundColor: checked ? '  rgb(99, 215, 215)' : '',
    
  }} />
);

Like.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}


export default Like;