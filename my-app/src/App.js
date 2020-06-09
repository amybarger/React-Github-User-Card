import React from 'react';
import './App.css';
import GithubUserCard from "./Components/GithubUserCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userData
    }
  }

  render() {
    return (
      <div className="App">
        <GithubUserCard user= {
          this.state.user} />
      </div>
    )
  }
}

export default App;
