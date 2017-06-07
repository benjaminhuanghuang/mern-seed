import React from 'react';

import Header from './header';
import ContestPreview from './contest-preview';

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

  //Spread Attributes
  render() {
    return ( <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>);
  }
}

export default App;