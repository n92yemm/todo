import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import {  } from 'react-router-dom';
import store from './store';
import RouterComponent from './routers';

/*
function run() {
    ReactDOM.render(<App />, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) run();
else window.addEventListener('DOMContentLoaded', run, false);
*/

class App extends Component {
    render() {
        return (
            <Provider store={store}> 
                <RouterComponent />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;