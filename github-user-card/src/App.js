import React from 'react';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followerData: []
    };
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/sdelpercio')
    .then(res => {
      console.log('response', res)
      this.setState({ userData: [res.data] });
      console.log(this.state.userData);
    })
    .catch(err => {
      console.log('error', err);
    })
  }
  
  render() {
    return (
      <div>
        <h1>Github User Cards</h1>
        <SearchForm />
        <CardList userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
