import React from 'react';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import CardList from './components/CardList';
import axios from 'axios';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 6% auto;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid black;
`
const StyledHeadline = styled.h2`
  margin: 4% auto;
  width: 80%;
  text-align: center;
`

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
          userError: '',
          userInput: ''
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
  // handle changes for username input
  handleChanges = event => {
    this.setState({
        userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <StyledTitle>Github User Cards</StyledTitle>
        <SearchForm 
          userInput={this.state.userInput}
          fetchInfo={this.fetchInfo}
          userError={this.state.userError}
          handleChanges={this.handleChanges} 
        />
        <StyledHeadline>User</StyledHeadline>
        <UserCard userData={this.state.userData} />
        <CardList followerData={this.state.followerData} />
      </div>
    );
  }
}

export default App;
