import React from 'react';
import axios from 'axios';
import Header from './header';
import ContestPreview from './contest-preview';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageHeader: 'Naming',
      contests:[]
    };
  }

  componentDidMount()
  {
    console.log('did Mount');
    axios.get('/api/contests')
    .then(resp =>{
      this.setState({
        contests: resp.data.contests
      }); 
    })
    .catch(console.error)
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