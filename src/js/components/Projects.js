import React, {Component} from 'react';
import {connect} from 'react-redux';
import Box from './ProjectBox';

class Projects extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
    <div className="container">
      <div className="row text-center project-tight">
        <Box ImgUrl="../../../assets/GZ.jpg" Content="GenZed is an online multiplayer battle arena that my team and I built for our capstone project at Fullstack Academy. Click to check it out!" Src="http://genzed.herokuapp.com/" Height={182}/>
        <Box ImgUrl="../../../assets/machi-koro.png" Content="Machi-koro-nyc is a real-time, online implementation of the famous board game Machi-koro. Click to check it out!" Src="https://github.com/ryskiz/machi-koro-nyc" Height={182}/>
        <Box ImgUrl="../../../assets/images.png" Content="Comictopia is an ecommerce project that my team and I built in one week at Fullstack Academy. Click to check it out!" Src="http://comictopia.herokuapp.com/" Height={182}/>
        <Box ImgUrl="../../../assets/personalSite.png" Content="I built this website as well! (using react and redux cuz whatevs)" Src="http://ryancskinner.com/" Height={182}/>
      </div>
    </div>
    )
  }
}

export default connect(null)(Projects);