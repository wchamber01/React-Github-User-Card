import React from "react";
import axios from "axios";
import Followers from "./components/Followers";
import Profile from "./components/Profile";

class App extends React.Component {
  state = {
    user: {},
    followers: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/wchamber01").then(response => {
      console.log(response.data, "user response.data");
      this.setState({ user: response.data });
    });
    axios
      .get("https://api.github.com/users/wchamber01/followers")
      .then(response => {
        console.log(response.data, "followers response.data");
        this.setState({ followers: response.data });
      });
  }

  render() {
    console.log(this.state.user);
    console.log(this.state.followers);
    return (
      <>
        <div className="app">
          <h1>My GitHub User Cards</h1>
          <Profile user={this.state.user} />
          <Followers
            followers={this.state.followers}
            key={this.state.followers}
          />
        </div>
      </>
    );
  }
}

export default App;

/*
avatar_url: "https://avatars1.githubusercontent.com/u/52251104?v=4"
bio: "Jack of all trades. Master of none."
blog: ""
company: null
created_at: "2019-06-26T15:24:21Z"
email: null
events_url: "https://api.github.com/users/wchamber01/events{/privacy}"
followers: 15
followers_url: "https://api.github.com/users/wchamber01/followers"
following: 11
following_url: "https://api.github.com/users/wchamber01/following{/other_user}"
gists_url: "https://api.github.com/users/wchamber01/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/wchamber01"
id: 52251104
location: "Palm City, FL"
login: "wchamber01"
name: "William Chambers"
node_id: "MDQ6VXNlcjUyMjUxMTA0"
organizations_url: "https://api.github.com/users/wchamber01/orgs"
public_gists: 0
public_repos: 46
received_events_url: "https://api.github.com/users/wchamber01/received_events"
repos_url: "https://api.github.com/users/wchamber01/repos"
site_admin: false
starred_url: "https://api.github.com/users/wchamber01/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/wchamber01/subscriptions"
type: "User"
updated_at: "2019-12-03T22:26:28Z"
url: "https://api.github.com/users/wchamber01"
*/
