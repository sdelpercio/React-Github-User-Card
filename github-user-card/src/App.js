import React from 'react';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import CardList from './components/CardList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      userInput: '',
      userError: '',
      followerData: []
    };
  }

  // set initial user and follower data
  componentDidMount() {
    axios
    .get('https://api.github.com/users/sdelpercio')
    .then(res => {
      this.setState({ userData: res.data });
    })
    .catch(err => {
      console.log('axios user error', err);
    })

    axios
    .get(`https://api.github.com/users/sdelpercio/followers`)
    .then(res => {
      console.log('followers data', res)
      this.setState({ followerData: res.data })
      console.log('followers data in state', this.followerData)
    })
    .catch(err => {
      console.log('axios followers error', err);
    })
  }

  // functions for search form
  fetchUser = event => {
    event.preventDefault();
    console.log('fetchUser has fired');
    axios
      .get(`https://api.github.com/users/${this.state.userInput}`)
      .then(res => {
        this.setState({
          userData: res.data,
          userError: ''
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          userData: {},
          userError: "we could not find your username, try again"
        });
      });
  };
  handleChanges = event => {
    this.setState({
        userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Github User Cards</h1>
        <SearchForm 
          userInput={this.state.userInput}
          fetchUser={this.fetchUser}
          userError={this.state.userError}
          handleChanges={this.handleChanges} 
        />
        <UserCard userData={this.state.userData} />
        <CardList followerData={this.state.followerData} />
      </div>
    );
  }
}

export default App;
