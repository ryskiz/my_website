import React, {Component} from 'react';
import {connect} from 'react-redux';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Nav from './NavBar';
import {cycleToNext} from '../reducer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.num);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Nav/>
            </div>
          </div>
        </div>
        <ReactCSSTransitionGroup
          className="leContainer"
          component="div"
          transitionName="example"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={300}>
          {
            this.props.num === 1 ? <AboutMe key={this.props.num} /> : null
          }
          {
            this.props.num === 2 ? <Projects key={this.props.num}/> : null
          }
          {
            this.props.num === 3 ? <Resume key={this.props.num}/> : null
          }
          {
            this.props.num === 4 ? <Contact key={this.props.num}/> : null
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
const mapStateToProps = ({isReady, num}) => ({isReady, num});
export default connect(mapStateToProps)(Home);