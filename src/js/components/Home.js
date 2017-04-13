import React, {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("THIS IS PROPS", this.props);
    return (
      <div>
        <h1>THIS IS A START</h1>
      </div>
    )
  }
}
const mapStateToProps = ({isReady}) => ({isReady});

export default connect(mapStateToProps)(Home);