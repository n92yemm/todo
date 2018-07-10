import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import WrapperLayout from '../components/WrapperLayout';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={WrapperLayout} />
                </Switch>
            </Router>
        );
    }
}

export default connect()(RouterComponent);
