import React from 'react';
import GithubUserCard from "./Components/GithubUserCard"
import FollowersList from "./Components/FollowersList"
import axios from 'axios';

import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      followers: [],
      user: ""
  }}

  componentDidMount() {
      console.log("componentDidMount success");

      axios
          .get("https://api.github.com/users/amybarger")
          .then(res => {
              console.log(res);
              this.setState({ user: res.data });
              console.log("User state data", this.state.user)
          })
          .catch(err => console.log("User API failed", err));

          axios
          .get("https://api.github.com/users/amybarger/followers")
          .then(res => this.setState({...this.state, followers: res.data}))
          .catch(err => console.log("Follower API failed",err));
          console.log("Followers state", this.state.followers)
  }

  handleChanges = e => {
      console.log(e.target.name, e.target.value);
      this.setState({
          ...this.state, followers: e.target.value
      });
  }

  render() {
      console.log("rendering");
      return (
          <div className="App">
            <h1>Github User</h1>
            <div className="user">
              <GithubUserCard 
              userInfo={this.state.user}
              />
              </div>
              <h2>Github User's Followers</h2>
              <div className="followers">
              <FollowersList
              followersInfo={this.state.followers}
              /> 
              </div>
          </div>
      )
  }
}

export default App;
