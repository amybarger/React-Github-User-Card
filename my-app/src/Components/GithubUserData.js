import React from "react";
import axios from "axios";

class GithubUserData extends React.Component {
    constructor() {
        super();
        this.state = {
          user: ""
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
}