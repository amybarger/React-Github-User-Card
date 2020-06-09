import React from "react";
import axios from "axios";

class GithubUserData extends React.Component {
    constructor() {
        super();
        this.state = {
          user: "",
          followers: ""
        }
      };

    componentDidMount() {
        console.log("componentDidMount success");

        axios
            .get("https://api.github.com/users/amybarger")
            .then(res => {
                console.log(res);
                this.setState({ user: res.data.message });
            })
            .catch(err => console.log(err));
    }

    handleChanges = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            ...this.state, followers: e.target.value
        });
    }

    fetchFollowers = e => {
        e.preventDefault();
        axios
            .get("https://api.github.com/users/amybarger/followers")
            .then(res => this.setState({...this.state, user: res.data.message}))
            .catch(err => console.log(err));
    };

    render() {
        console.log("rendering");
        return (
            <div>
                <GithubUserCard 
                type="text"
                name="user"
                value={this.state.user}
                onChange={this.handleChanges}
                />
                <button onClick={this.fetchFollowers}>Fetch followers</button>
                <div className="user">
                    {this.state.user.map(user => (<img width="200" src={user} key={user} alt={user}/>
                ))}
                </div>
            </div>
        )
    }
}

export default GithubUserData;