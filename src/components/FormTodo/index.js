import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { addTodoItem } from '../../actions/addTodoItem';
import ListTodo from '../ListTodo';
import './styles.css';

const required = value => value ? undefined : 'Required';
const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength1 = minLength(1);

class FormTodo extends React.Component {
    addItemHandler = () => {
        this.props.addTodoItem();
    } 
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div id="todoContainer">
                <form onSubmit={ handleSubmit(this.addItemHandler) }>
                    <div id="searchRow">
                        <Field id="typeTodo" className="paddingElem" 
                            validate={[ required, minLength1 ]}
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
    form: 'toDo'
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
    dirty: PropTypes.bool,
    handleSubmit: PropTypes.func, 
    submitting: PropTypes.bool
};
