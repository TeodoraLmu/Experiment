import React from 'react';
import PropTypes from 'prop-types';
import emojis from './emojis';
import Emoji from './Emoji';
import "./Additional.css";
import Icon from '@material-ui/core/Icon';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';



class EmojiContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const icon=e.target.icon;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked)} ));
    console.log(item, icon, isChecked,this.state.checkedItems);
  }
  
  render() {
    return (
      
      <React.Fragment>
        <div><link href="https://fonts.googleapis.com/icon?family=Material+Icons"></link></div>
        {
          emojis.map(item => (
            <label key={item.key}>
              <Emoji icon={item.icon} checked={this.state.checkedItems.get(item.name)} 
              onClick={this.handleChange}>
             </Emoji>
            </label>
          )
          )
        },
        
      </React.Fragment>
    );
  }
}

export default EmojiContainer;
