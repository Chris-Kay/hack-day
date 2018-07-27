import React, { Component } from 'react';
import firebase from './firebase.js';
import './css/App.css';
import './css/bootstrap.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      message: '',
      username: '',
      showThankYou: false,
      showUsernameMissing: false,
      showMessageMissing: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    if (this.state.message !== "" && this.state.username !== "") {
      e.preventDefault();
      const itemsRef = firebase.database().ref('items');
      const item = {
        message: this.state.message,
        user: this.state.username
      }

      this.setState({
        message: '',
        username: '',
        showThankYou: true
      });
      itemsRef.push(item);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    if (this.state.showThankYou) {
      return (
        <div>
          <h1> Thank You, your message is with the editorial team </h1>
        </div>
      )
    }

    return (

      <div className='app'>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Get Involved</h5>
              </div>
              <div className="modal-body">
                <form className="get-involved-form" onSubmit={this.handleSubmit}>
                  Name
                        <input className="username" type="text" name="username" placeholder="Joe Blogs" onChange={this.handleChange} value={this.state.username}
                  /> Message
                        <textarea className="input-box" align="top" type="text" name="message" placeholder="" onChange={this.handleChange} value={this.state.message}
                  />
                  <div className="modal-footer">
                    <button className="btn btn-primary send-button">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
