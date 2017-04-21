import React from 'react';
import {connect} from 'react-redux';
import {cycleTo1, cycleTo2, cycleTo3, cycleTo4, burger} from '../reducer';
import { Collapse, Card, CardBlock } from 'reactstrap';
const Nav = ({dispatchCycle1, dispatchCycle2, dispatchCycle3, dispatchCycle4, dispatchBurger, name}) => {
  return (
    <nav className="nav text-center">
      <div className="collapse navbar-collapse">
        <button className="bttn-stretch navButton" onClick={dispatchCycle1}>About Me</button>
        <button className="bttn-stretch navButton" onClick={dispatchCycle2}>Projects</button>
        <button className="bttn-stretch navButton" onClick={dispatchCycle3}>Resume</button>
        <button className="bttn-stretch navButton" onClick={dispatchCycle4}>Contact</button>
      </div>
      <div className="mobile-nav">
        <button className={`hamburger hamburger--spin ${name}`} onClick={dispatchBurger}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <Collapse isOpen={name.length}>
          <Card>
            <CardBlock>
              <button className="bttn-stretch navButton" onClick={dispatchCycle1}>About Me</button>
              <button className="bttn-stretch navButton" onClick={dispatchCycle2}>Projects</button>
              <button className="bttn-stretch navButton" onClick={dispatchCycle3}>Resume</button>
              <button className="bttn-stretch navButton" onClick={dispatchCycle4}>Contact</button>
            </CardBlock>
          </Card>

        </Collapse>
      </div>
    </nav>
  );
};

const mapState = ({name}) => ({name});

const mapDispatch = (dispatch) => ({
  dispatchCycle1: () => {
    dispatch(cycleTo1())
  },
  dispatchCycle2: () => {
    dispatch(cycleTo2())
  },
  dispatchCycle3: () => {
    dispatch(cycleTo3())
  },
  dispatchCycle4: () => {
    dispatch(cycleTo4())
  },
  dispatchBurger: () => {
    dispatch(burger())
  }
});

export default connect(mapState, mapDispatch)(Nav);