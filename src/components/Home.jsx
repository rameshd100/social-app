import React, { Component } from "react";
import "./Home.scss";
import Page from "./page";

class Home extends Component {
  render() {
    return (
      <Page title="Home">
        <div>
          <form>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account</p>
            <label for="username">Username</label>
            <input type="text" name="username" placeholder="Enter Username" />

            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Enter Email" />

            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Enter Password" />
          </form>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
      </Page>
    );
  }
}

export default Home;
