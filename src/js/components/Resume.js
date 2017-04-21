import React from 'react';

const Resume = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>What I've Done</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-center">
          <svg style={{height: "10px"}}>
            <line strokeDasharray="0, 0" x1="50" y1="10" x2="400" y2="10" />
          </svg>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-center" style={{padding: "25px 0 0 0"}}>
          <a href="../../../assets/ryan skinner resume copy.pdf" download="Ryan Skinner Resume.pdf">Download my resume</a>
        </div>
      </div>
    </div>
  );
};

export default Resume