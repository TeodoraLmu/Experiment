import React from 'react';
import PropTypes from 'prop-types';
import emojis from './emojis';
import Emoji from './Emoji';
import "./Additional.css";
import Icon from '@material-ui/core/Icon';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { type } from '@testing-library/user-event/dist/type';


const icons = {
  SentimentVeryDissatisfiedIcon, 
  SentimentDissatisfiedIcon, 
  SentimentSatisfiedIcon, 
  SentimentSatisfiedAltIcon,
  SentimentVerySatisfiedIcon
};

const menuItems= [
  { label: "Bad", icon: "SentimentVeryDissatisfiedIcon" },
  { label: "Dissatisfied",  icon: "SentimentDissatisfiedIcon" },
  { label: "Neutral",  icon: "SentimentSatisfiedIcon"},
  { label: "Satisfied",  icon: "SentimentSatisfiedAltIcon"},
  { label: "Happy",  icon: "SentimentVerySatisfiedIcon"},
  
];
class EmojiScale extends React.Component {
 /* constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  } */

  handleClick = () => {
    console.log('this is:', this);
  };
  
  
  render() {
    return (
      <React.Fragment>
        <div><link href="https://fonts.googleapis.com/icon?family=Material+Icons"></link></div>
        {menuItems.map(({ label, icon }) => {
        const Icon = icons[icon];
        return (
          <span onClick={this.handleClick} key={label}>
            <Icon/>
          </span>
        );
      })}
        
      </React.Fragment>
    );
  }
}

export default EmojiScale;
