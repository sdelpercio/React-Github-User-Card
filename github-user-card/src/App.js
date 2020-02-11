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

  }
  
  render() {
    return (
      <div>
        <h1>Github User Cards</h1>
        <SearchForm />
        <CardList />
      </div>
    );
  }
}

export default App;
