import React from 'react';
import { connect } from 'react-redux'
const Performance = ({test}:any) => (
  <div className="App">
    <h1> Performacne tsx</h1>
    <div>
      redux 内容{JSON.stringify(test)}
    </div>
  </div>
);

const mapStateToProps = (state:any) => ({
  test: state
})

export default connect(
  mapStateToProps
)(Performance);