import React from 'react';
import './App.css';
import marked from 'marked';
import CSS from 'csstype';

import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);
marked.setOptions(({
  gfm: false,
  breaks: true,
  xhtml: true
}))
interface TextAreaProps {
  text: string;
  height: number;
  padding: number;
  headerHeight: string;
  beginResize: (event: React.SyntheticEvent) => void,
  endResize: (event: React.SyntheticEvent) => void,

}

const Previewer: React.SFC<TextAreaProps> = (props) => {
  const padding = 15;


  const getMarkup = () => ({
    __html: marked(DOMPurify.sanitize(props.text).replace(/&gt;+/g, '>'))
  });

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
    cursor: 'row-resize',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-around'

  }

  const getPreviewerStyle = (): CSS.Properties => {
    return {
      width: '100%',
      height: `calc(${ props.height}px - ${ props.headerHeight })`,
      padding: `0 ${ padding }px ${ padding }px ${ padding}px`,
      background: 'transparent',
      fontSize: '1.2rem',
      outline: 'none',
      overflow: 'auto',
      boxSizing: 'border-box'

    }
  }



  return (
    <div style={ getContainerStyle() }>
      <div style={ headerStyle } onMouseDown={ props.beginResize }
        onMouseUp={ props.endResize }>
        <div>↕</div>
        <div>Markdown Preview:</div>
        <div>↕</div>
        </div>

      <div style={ getPreviewerStyle() } id="preview" dangerouslySetInnerHTML={ getMarkup() }></div>
    </div>
  );
}

export default Previewer;