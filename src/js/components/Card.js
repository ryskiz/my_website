import React from 'react';

const Card = (props) => {
  return (
    <div className="wrap myCard" style={{height: "380px", width: "380px"}}>
      <div className="tile">
        <img
          src='../../../assets/finalrs.jpg'/>
        <div className="text">
          <h2 className="animate-text">Proficient:</h2>
          <p className="animate-text">JavaScript, React/Redux, Node, Express, SQL/PostgreSQL, Sequelize, HTML5, CSS3, Git</p>
          <h2 className="animate-text">Familiar:</h2>
          <p className="animate-text">Java, MongoDB, Angular.js, Android Studio, Android development, React Native</p>
        </div>
      </div>
    </div>
  );
};

export default Card