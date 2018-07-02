import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addItem } from '../../actions';

import './styles.css';

class Form extends React.Component {
    addItemHandler = event => {
        event.preventDefault();
        this.props.addItem();
    }
    render() {
        return (
            <form>
                <div>
                    <Field name="searchField" component="input" type="text" placeholder="Add an item..." />
                    <button onClick={ this.addItemHandler }>Add item</button>
                </div>
                <div>
                    
                </div>
            </form>
        );
    }
};

const withForm = Form = reduxForm({
    form: 'toDo'
})(Form);

export default connect(null, {
    addItem,
})(withForm);