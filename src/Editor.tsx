import React, { Component } from 'react';
import CSS from 'csstype';
interface EditorProps {
  handleInput: (event: React.SyntheticEvent) => void;
  text: string;
  height: number;
  headerHeight: string;
}

const Editor: React.SFC<EditorProps> = (props) => {
  const padding = 15;


  const getContainerStyle = (): CSS.Properties => {
    return {
      width: '100%',
      height: `${ props.height }px`,
      boxSizing: 'border-box'
    };
  }

  const headerStyle: CSS.Properties = {

    height: props.headerHeight,
    width: '100%',
    fontSize: '1.5rem',
    color: 'white',
    textAlign: 'center',
    background: 'teal',
    boxSizing: 'border-box'

  };

  const getTextStyle = (): CSS.Properties => {
    return {
      resize: 'none',
      border: 'none',
      width: '100%',
      height: `calc(${ props.height }px - ${ props.headerHeight })`,
      padding: `${ padding }px`,
      background: 'transparent',
      fontSize: '1.2rem',
      outline: 'none',
      overflow: 'auto',
      boxSizing: 'border-box'

    }
  }

  return (
    <div style={ getContainerStyle() }>
      <div style={ headerStyle }>Markup Editor:</div>

      <textarea style={ getTextStyle() } id="editor" defaultValue={ props.text } onInput={ props.handleInput }></textarea>
    </div>
  );
}

export default Editor;