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
      this.setState({ followerData: res.data })
    })
    .catch(err => {
      console.log('axios followers error', err);
    })
  }

  // functions for search form
  fetchInfo = event => {
    event.preventDefault();
    console.log('fetchUser has fired');

    // fetching user card
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

      // fetching follower cards
      axios
      .get(`https://api.github.com/users/${this.state.userInput}/followers`)
      .then(res => {
        this.setState({ followerData: res.data })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          followerData: []
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
          fetchInfo={this.fetchInfo}
          userError={this.state.userError}
          handleChanges={this.handleChanges} 
        />
        <h1>User</h1>
        <UserCard userData={this.state.userData} />
        <CardList followerData={this.state.followerData} />
      </div>
    );
  }
}

export default App;
