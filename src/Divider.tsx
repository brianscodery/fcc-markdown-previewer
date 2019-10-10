import React from 'react';
import CSS from 'csstype';
import Handle from './Handle';
interface DividerProps {
  beginResize: (event: React.SyntheticEvent) => void,
  endResize: (event: React.SyntheticEvent) => void,
  resizing: boolean,

}

const Divider: React.SFC<DividerProps> = (props) => {

  const textStyle: CSS.Properties = {
    width: '100%',
    height: '8px',
    background: 'teal',
    cursor: 'row-resize'
  }

  

  return (
    <div 
      style={ textStyle }
      onMouseDown={props.beginResize}
      onMouseUp={props.endResize}>
        <Handle />
    </div>
  );
}

export default Divider;