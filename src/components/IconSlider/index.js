import React, { Component ,Fragment } from 'react'
import './index.less'
class IconSlider extends Component {
  state = {
    value: 10,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
   
    return (
      <Fragment >
          <span className="w_process_text">20%</span>
          <div className="w_process">
              <div className="w_process_bar"></div>
          </div>
      </Fragment>
    );
  }
}

export {
    IconSlider
}