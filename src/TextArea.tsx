import React from 'react';

interface TextAreaProps {
  handleInput: (event: React.SyntheticEvent) => void;
}

const TextArea: React.SFC<TextAreaProps> = (props) => {



  return (
    <textarea onInput={props.handleInput}></textarea>
  );
}

export default TextArea;