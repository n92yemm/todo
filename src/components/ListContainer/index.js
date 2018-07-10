import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import RowTodo from '../RowTodo';
import './styles.css';
import { changeTodoItemChecked } from '../../actions/changeTodoItemChecked';
import { editTodoItem } from '../../actions/editTodoItem';

class ListContainer extends React.Component {
    changeItemHandler = (todoItem) => () => {
        //console.log(todoItem);
        changeTodoItemChecked(todoItem);
    }

    editItemHandler = (todoItem) => () => {
        //console.log(todoItem);
        editTodoItem(todoItem);
    }

    render() {
        let { todo } = this.props;
        return (
            <div>
                { todo.map((item, index) => 
                    <Field 
                        todoItem={ item } 
                        changeItemHandler={this.changeItemHandler(item)} 
                        editItemHandler={this.editItemHandler(item)} 
                        name={`${item._id}`} 
                        component={RowTodo} 
                        key={index}
                    />) 
                }
            </div>
        );
    }
}

const withListContainer = reduxForm({
    form: 'listTodo'
})(ListContainer);

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoItems
    };
};

export default ListContainer;
connect(mapStateToProps, {
    changeTodoItemChecked,
    editTodoItem
})(withListContainer);

ListContainer.propTypes = {
    todo: PropTypes.array,
    changeTodoItemChecked: PropTypes.func,
    editTodoItem: PropTypes.func
};