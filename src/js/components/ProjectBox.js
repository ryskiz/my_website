import React from 'react';

const Box = (props) => {
  return (
    <div className="col-sm-6 col-xs-12 projectBox">
      <div className="wrap" style={{width: "250px"}}>
        <img src={`${props.ImgUrl}`} height={props.Height}/>
        <div className="overlay text-center" style={{width: "250px"}} onClick={() => window.open(`${props.Src}`)}>
          <p style={{padding: "50px 10px 0 10px"}}>{props.Content}</p>
        </div>
      </div>
    </div>
  );
};

export default Box