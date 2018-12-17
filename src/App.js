import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Master from "./components/Master";
import Nav from "./components/Nav";
import firebase from "./components/firebase";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false
    };
  }

  // componentDidMount() {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState(
  //         {
  //           user: user
  //         },
  //         () => {
  //           // create reference specific to user
  //           this.dbRef = firebase
  //             .database()
  //             .ref(`/users/${this.state.user.uid}`);
  //           this.dbRef.on("value", snapshot => {
  //             this.setState({
  //               userData: snapshot.val() || {}
  //             });
  //           });
  //         }
  //       );
  //     }
  //   });
  // }

  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  };

  // LOGIN FUNCTIONS

  logIn = () => {
    auth.signInWithPopup(provider).then(result => {
      this.setState({
        user: result.user,
        uid: result.user.uid
      });
    });
  };

  logOut = () => {
    console.log("log out");
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
    this.props.history.push(`/login`);
  };

  guestLogin = () => {
    console.log("works");
    firebase.auth().signInAnonymously();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div>
              {/* <h1>FleX Fitness</h1> */}
              <Nav
                toggleMenu={this.toggleMenu}
                isOpen={this.state.menuIsOpen}
                logIn={this.logIn}
                logOut={this.logOut}
                guestLogin={this.guestLogin}
              />
            </div>
          </header>

          <main>
            <Master
              history={this.props.history}
              logIn={this.logIn}
              logOut={this.logOut}
              guestLogin={this.guestLogin}
              user={this.state.user}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
