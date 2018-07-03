import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import RouterComponent from './routers';

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