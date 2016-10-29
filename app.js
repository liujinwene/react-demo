import React from 'react';
import ReactDom from 'react-dom';
// import { render } from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
        <div>Hello World</div>
        );
  }
}

ReactDom.render(<HelloWorld />, document.getElementById('app'));
// render(<HelloWorld />, document.getElementById('app'));