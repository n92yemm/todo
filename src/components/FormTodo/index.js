import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { addTodoItem } from '../../actions/addTodoItem';
import ListTodo from '../ListTodo';
import './styles.css';

class FormTodo extends React.Component {
    addItemHandler = event => {
        event.preventDefault();
        this.props.addTodoItem();
    } 
    render() {
        return (
            <div id="todoContainer">
                <form >
                    <div id="searchRow">
                        <Field id="typeTodo" className="paddingElem" name="searchField" component="input" type="text" placeholder="Add an item..." />
                        <button id="addTodo" className="paddingElem" onClick={ this.addItemHandler }>Add item</button>
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
    addTodoItem,
})(withFormTodo);

FormTodo.propTypes = {
    addTodoItem: PropTypes.func
};
