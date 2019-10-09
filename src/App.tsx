import React, { SyntheticEvent } from 'react';
import './App.css';

import TextArea from './TextArea';
import Previewer from './Previewer';
import marked from 'marked';

import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);


// const clean = DOMPurify.sanitize(dirty);
interface AppState {
  currentText: string;
}

class App extends React.Component<{}, AppState> {

  state: AppState = {
    currentText: '',
  }

  handleInput = (event: React.SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    this.setState({currentText: marked(DOMPurify.sanitize(value))})
    console.log(this.state)
  }

render() {
  return (
    <div className="App">
      <TextArea handleInput={this.handleInput}/>
      <Previewer handleInput={this.handleInput}/>
    </div>
  );
}}

export default App;
