import React from "react";
import { Redirect, Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

class App extends React.Component {
  componentDidMount() {
    const { history } = this.props;

    window.addEventListener("popstate", () => {
      history.go(1);
    });
  }

  render() {
    return (
       [ <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">SSI Aeration</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">            
            <li className="nav-item" key={1}>
                <Link to="/featured/products" className="nav-link">Featured Products</Link>
            </li>
            <li className="nav-item" key={2}>
                <Link to="/category/groups" className="nav-link">Category Groups</Link>
            </li>            
          </ul>
        </div>  
      </nav>,
        <div className="container-fluid">
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/featured/products" />} />
                <Route path="/featured/products" component={Page1} />
                <Route path="/category/groups" component={Page2} />
            </Switch>
        </div>      
      ]
    );
  }
}

export default App;
