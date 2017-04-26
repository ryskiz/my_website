import React from 'react';
import Card from './Card';

const About = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>About Ryan</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-center">
          <svg style={{height: "10px"}}>
            <line strokeDasharray="0, 0" x1="50" y1="10" x2="400" y2="10"/>
          </svg>
        </div>
      </div>
      <div className="row tight">
        <div className="col-sm-6 col-xs-12 text-center">
          <Card/>
        </div>
        <div className="col-sm-6 col-xs-12 text-center" style={{padding: "60px 0 0 0"}}>
          <div className="mobile-wrap">
            <h3>Hey! I'm Ryan Skinner, a full stack software engineer. I've been building applications in JavaScript for
              the past 3 years and I just recently attended the Fullstack Academy of Code. When I'm not coding I'm
              usually playing pool, eating a cheeseburger/slice of pizza, or I'm playing video games.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;