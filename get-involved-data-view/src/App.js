import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

import './css/bootstrap.css';
import './css/animate.min.css';
import './css/light-bootstrap-dashboard.css';
import './css/demo.css';
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

    const tableItems = () => 
    { 
      return this.state.items.map((item) => {
      console.log(item);
      return (
        <tr>
          <td>{item.user}</td>
          <td>{item.message}</td>
        </tr>
      )})
    };

    return (
      <div className="wrapper">
        <div className="sidebar" data-color="yellow" data-image="/img/sidebar-5.jpg">
          <div className="sidebar-wrapper">
            <div className="logo">
              <a href="#" className="simple-text">
                Audience Questions
                  </a>
            </div>
            <ul className="nav">
              <li className="active">
                <a href="table.html">
                  <i className="pe-7s-note2" />
                  <p>Table List</p>
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
                <a className="navbar-brand" href="#">Live Audience Questions</a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-left">
                  <li>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-dashboard" />
                      <p className="hidden-lg hidden-md">Dashboard</p>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-globe" />
                      <b className="caret hidden-sm hidden-xs" />
                      <span className="notification hidden-sm hidden-xs">5</span>
                      <p className="hidden-lg hidden-md">
                        5 Notifications
                            <b className="caret" />
                      </p>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Notification 1</a></li>
                      <li><a href="#">Notification 2</a></li>
                      <li><a href="#">Notification 3</a></li>
                      <li><a href="#">Notification 4</a></li>
                      <li><a href="#">Another notification</a></li>
                    </ul>
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
                      <h4 className="title">Audience Questions</h4>
                      <p className="category">This is a list with the latest questions from the audience</p>
                    </div>
                    <div className="content table-responsive table-full-width">
                      <table className="table table-hover table-striped">
                        <thead>
                          <tr>
                            <th className="nameColumn">Name</th>
                            <th>User Question</th>
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
