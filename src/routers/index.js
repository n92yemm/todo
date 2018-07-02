import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component={Wrapper} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
      
    };
};

export default connect(mapStateToProps)(RouterComponent);
