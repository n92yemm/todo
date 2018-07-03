import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addTodoItem } from '../../actions/addTodoItem';
import { changeTodoItemChecked } from '../../actions/changeTodoItemChecked';
import Row from '../Row';
import './styles.css';

class Form extends React.Component {
    addItemHandler = event => {
        event.preventDefault();
        this.props.addTodoItem();
    }
    changeItemHandler = (todoItem) => () => {
        this.props.changeTodoItemChecked(todoItem);
    }
    render() {
        let { items } = this.props.todoItems;
        return (
            <form>
                <div>
                    <Field name="searchField" component="input" type="text" placeholder="Add an item..." />
                    <button onClick={ this.addItemHandler }>Add item</button>
                </div>
                {
                    items && 
                        <div>
                            { items.map((item, index) => <Row todoItem={ item } changeItemHandler={ this.changeItemHandler } key={ index } />) }
                        </div>
                }
            </form>
        );
    }
}

const withForm = reduxForm({
    form: 'toDo'
})(Form);

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoItems
    };
};

export default connect(mapStateToProps, {
    addTodoItem,
    changeTodoItemChecked
})(withForm);
