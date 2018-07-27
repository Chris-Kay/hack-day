import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

import './css/bootstrap.css';
import './css/animate.min.css';
import './css/light-bootstrap-dashboard.css';
import './css/demo.css';
import './css/font-awesome.min.css';

import './fonts/fa-regular-400.woff';
import './css/pe-icon-7-stroke.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          message: items[item].message,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {

    const tableItems = () => {
      return this.state.items.map((item) => {
        console.log(item);
        return (
          <tr>
            <td>{item.user}</td>
            <td>{item.message}</td>
            <td>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active approve">
                  <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Post
                </label>
                <label className="btn btn-secondary reject">
                  <input type="radio" name="options" id="option2" autoComplete="off" /> Reject
                </label>
              </div>
            </td>
          </tr>
        )
      })
    };

    return (
      <div className="wrapper">
        <div className="sidebar" data-color="yellow" data-image="img/sidebar-5.jpg">
          <div className="sidebar-wrapper">
          <div className="sidebar-background" style={{backgroundImage: 'url(https://image.ibb.co/hdkZ9T/sidebar_5.jpg)'}} />
            <div className="logo">
              <a href="#" className="simple-text">
                Get Involved
                  </a>
            </div>
            <ul className="nav">
              <li className="active">
                <a href="table.html">
                  <i className="pe-7s-note2" />
                  <p>Live Page Involvement</p>
                </a>
              </li>
              <li>
                <a href="notifications.html">
                  <i className="pe-7s-bell" />
                  <p>Notifications</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel">
          <nav className="navbar navbar-default navbar-fixed">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="https://www.bbc.co.uk/sport/live/formula1/44669193">Live Page Involvement - Hungarian GP 1st Practice</a>
                <p className="uriBar"> <b>URI</b> /sport/live/formula1/44669193</p>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-left">
                  <li>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-dashboard" />
                      <p className="hidden-lg hidden-md">Dashboard</p>
                    </a>
                  </li>
                  
                  <li>
                    <a href>
                      <i className="fa fa-search" />
                      <p className="hidden-lg hidden-md">Search</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="header">
                      <h4 className="title">Audience Comments</h4>
                      <p className="category">This is a list with the latest questions from the audience</p>
                    </div>
                    <div className="content table-responsive table-full-width">
                      <table className="table table-hover table-striped">
                        <thead>
                          <tr>
                            <th className="nameColumn">User Name</th>
                            <th className="messageColumn">User Comment</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableItems()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <p className="copyright pull-right">
                ©  BBC Hackathon - Chris Kay / Vasiliki Delimpasi
                  </p>
            </div>
          </footer>
        </div>
      </div>
    );
    ;
  }
}

export default App;
