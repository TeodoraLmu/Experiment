import React from 'react';
import PropTypes from 'prop-types';
import "./Additional.css";
import Icon from '@material-ui/core/Icon';

<><link href="https://fonts.googleapis.com/icon?family=Material+Icons"></link><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /></>


const Emoji = ({ type = 'button', name, icon={icon}, checked=false, onClick }) => (
  <><input type={type} name={name} icon={icon} className='material-icons md-48' value={name} checked={!checked} onClick={onClick} style={{
    color: checked ? 'rgb(216, 157, 20)' : '',
    border: "none",
  }}>
  </input></>
);

Emoji.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}


export default Emoji;