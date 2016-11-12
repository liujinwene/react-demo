import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div>
    			Hello, React Router!
    			<div>
    				{this.props.children}
    			</div>
    		</div>
  }
};

export default App;