import React from 'react';
import PropTypes from 'prop-types';
import location1 from './location1';
import Location from './Location';


class Location1Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange(e) {

    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked)} ));
    console.log(item, isChecked,this.state.checkedItems);
    
  }
  
  render() {
    return (
      <React.Fragment>
        {
          location1.map(item => (
            <label key={item.key}>
              <Location name={item.name} checked={this.state.checkedItems.get(item.name)} onClick={this.handleChange} />
            </label>
          ))
          

        }
      </React.Fragment>
    );
  }
}

export default Location1Container;
