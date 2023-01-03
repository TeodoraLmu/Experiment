import React from 'react';
import PropTypes from 'prop-types';
import cleanliness3 from './cleanliness3';
import Cleanliness from './Cleanliness';


class Cleanliness3Container extends React.Component {
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
          cleanliness3.map(item => (
            <label key={item.key}>
              <Cleanliness name={item.name} checked={this.state.checkedItems.get(item.name)} onClick={this.handleChange} />
            </label>
          ))
          

        }
      </React.Fragment>
    );
  }
}

export default Cleanliness3Container;
