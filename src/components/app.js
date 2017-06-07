import React from 'react';

import Header from './header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageHeader: 'Naming'
    };
  }

  componentDidMount()
  {
    console.log('did Mount');
  }

  componentWillUnmount()
  {
    console.log('will Unmount');
  }


  render() {
    return ( <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
        </div>
      </div>);
  }
}


export default App;