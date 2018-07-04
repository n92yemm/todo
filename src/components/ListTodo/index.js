import React from 'react';
import { connect } from 'react-redux';
import { FieldArray, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { changeTodoItemChecked } from '../../actions/changeTodoItemChecked';
import { editTodoItem } from '../../actions/editTodoItem';
import RowTodo from '../RowTodo';
import './styles.css';

class ListTodo extends React.Component {
    changeItemHandler = (todoItem) => () => {
        this.props.changeTodoItemChecked(todoItem);
    }
    render() {
        const { items } = this.props.todoItems;
        return (
            <form id="listTodo">
                {
                    items && <div>
                        { items.map((item, index) => 
                            <FieldArray 
                                todoItem={ item } 
                                changeItemHandler={this.changeItemHandler(item)} 
                                name={`${item.text}.listTodo`} 
                                component={RowTodo} 
                                key={index}
                            />) 
                        }
                    </div>
                }
            </form>
        );
    }
}

const withListTodo = reduxForm({
    form: 'listTodo'
})(ListTodo);

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoItems
    };
};

export default connect(mapStateToProps, {
    changeTodoItemChecked,
    editTodoItem
})(withListTodo);

ListTodo.propTypes = {
    changeTodoItemChecked: PropTypes.func,
    todoItems: PropTypes.object
};