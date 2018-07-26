import React, { Component } from 'react';
import firebase from './firebase.js'; 
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      message: '',
      username: '',
      showThankYou: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(e) {
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    if(this.state.showThankYou) {
      return (
        <div>
          <h1> Thank You, your message is with the editorial team </h1>
        </div>
      )
    }

    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Get Involved</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
          <form className="get-involved-form" onSubmit={this.handleSubmit}>
            <input className="username" type="text" name="username" placeholder="Joe Blogs" onChange={this.handleChange} value={this.state.username} />
            <textarea className="input-box" align="top" type="text" name="message" placeholder="" onChange={this.handleChange} value={this.state.message} />
            <button className="send-button">Send</button>
        </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
