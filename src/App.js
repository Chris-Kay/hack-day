import React, { Component } from 'react';
import firebase from './firebase.js'; 
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      message: '',
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
  }

  

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      message: this.state.message,
      user: this.state.username
    }
    itemsRef.push(item);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="Joe Blogs" onChange={this.handleChange} value={this.state.username} />
            <input type="text" name="message" placeholder="" onChange={this.handleChange} value={this.state.message} />
            <button>Add Item</button>
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
