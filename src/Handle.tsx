import React from 'react';
import CSS from 'csstype';



const Handle: React.SFC<{}> = () => {

  const handleStyle: CSS.Properties = {
    width: '100%',
    height: '8px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    margin: '0'
  }

const circleStyle: CSS.Properties = {
  borderRadius: '50%',
  width: '4px',
  height: '4px',
  margin: '0 2px',
  background: '#efefef'
}

  return (
    <div
      style={ handleStyle }
      >
      <div style={circleStyle}></div>
      <div style={circleStyle}></div>
      <div style={circleStyle}></div>
    </div>
  );
}

export default Handle;