import React, { SyntheticEvent } from 'react';
import './App.css';

import Editor from './Editor';
import Previewer from './Previewer';
import defaultText from './defaultText';
// import Divider from './Divider';
import CSS from 'csstype';

interface AppState {
  text: string;
  resizing: boolean,
  // width: number,
  // height: number,
  editorHeight: number,
  previewerHeight: number
}

class App extends React.Component<{}, AppState> {
  margin = 20;
  padding = 15;
  headerHeight = '2rem'; 

  state: AppState = {
    text: defaultText,
    resizing: false,
    // width: window.innerWidth,
    // height: window.innerHeight,
    editorHeight: (window.innerHeight) / 2 - this.margin,
    previewerHeight: (window.innerHeight) / 2 - this.margin,
  }


  handleInput = (event: React.SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    this.setState({ text: value });
  }

  beginResize = (event: React.SyntheticEvent) => {
    this.setState({
      resizing: true
    })
   window.addEventListener("mousemove", this.handleResize);
   window.addEventListener('mouseup', this.endResize);
  }
  endResize = () => {
    this.setState({ resizing: false });
    console.log('endResize')
    window.removeEventListener("mousemove", this.handleResize);
    window.removeEventListener("mouseup", this.endResize);

  }
  handleResize = (event: MouseEvent) => {
    const clientY = event.clientY;
    console.log(clientY)

    if (this.state.resizing) {
      this.setState({
          editorHeight: clientY - this.margin,
          previewerHeight: window.innerHeight - clientY - this.margin,
      })
  }
  }
  // updateDimensions = () => {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  // componentDidMount() {
  //   this.updateDimensions();
  //   window.addEventListener("resize", this.updateDimensions);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions);
  // }


  getContainerStyle = (): CSS.Properties => {
    return {
      width: `${window.innerWidth - 2 * this.margin}px`,
      height: `${window.innerHeight - 2 * this.margin}px`,
      margin: `${this.margin}px`,
      border: '3px solid teal',
      borderRadius: '5px',
      padding: '0',
      overflow: 'hidden',
      background: '#ededed'
    };
  }
  
  render() {
    return (
      <div style={ this.getContainerStyle() } className="App">
        <Editor 
          text={ this.state.text }
          handleInput={ this.handleInput }
          height={ this.state.editorHeight }
          headerHeight={ this.headerHeight }
        />
        <Previewer
          beginResize={ this.beginResize }
          endResize={ this.endResize }
          text={ this.state.text }
          height={ this.state.previewerHeight }
          padding={this.padding}
          headerHeight={this.headerHeight}
        />
      </div>
    );
  }
}

export default App;

/* <Divider beginResize={ this.beginResize } endResize={ this.endResize } resizing={ this.state.resizing } /> */