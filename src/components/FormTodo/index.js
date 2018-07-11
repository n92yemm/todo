import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { addTodoItem } from '../../actions/addTodoItem';
import ListTodo from '../ListTodo';
import './styles.css';
import { TODO_FORM } from '../../constants/forms';
import { required, length } from 'redux-form-validators';

class FormTodo extends React.Component {
    render() {
        const { handleSubmit, submitting, addTodoItem } = this.props;
        return (
            <div id="todoContainer">
                <form onSubmit={ handleSubmit(addTodoItem) }>
                    <div id="searchRow">
                        <Field id="typeTodo" className="paddingElem" 
                            validate={[required(), length({ min: 1 }) ]} 
                            name="searchField" 
                            component="input" 
                            type="text" 
                            placeholder="Add an item..." />
                        <button id="addTodo" type="submit" className="paddingElem" disabled={submitting}>Add item</button>
                    </div>
                </form>
                <ListTodo />
            </div>
        );
    }
}

const withFormTodo = reduxForm({
    form: TODO_FORM
})(FormTodo);

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoItems
    };
};

export default connect(mapStateToProps, {
    addTodoItem
})(withFormTodo);

FormTodo.propTypes = {
    addTodoItem: PropTypes.func,
    handleSubmit: PropTypes.func, 
    submitting: PropTypes.bool
};
