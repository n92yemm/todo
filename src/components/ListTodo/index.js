import React from 'react';
import { connect } from 'react-redux';
import { FieldArray, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { changeTodoItemChecked } from '../../actions/changeTodoItemChecked';
import { getTodo } from '../../actions/getTodoItems';
import { editTodoItem } from '../../actions/editTodoItem';
import './styles.css';
import ListContainer from '../ListContainer';

class ListTodo extends React.Component {
    componentDidMount() {
        this.props.getTodo();
    }
    render() {
        const { items } = this.props.todoItems;

        const values = items.reduce((obj, item) => ({
            ...obj,
            [obj._id]: item
        }), {});

        return (
            <form id="listTodo">
                { items && <div>
                    <FieldArray name="values" todo={ items } component={ListContainer} />
                </div> }
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
    getTodo,
    changeTodoItemChecked,
    editTodoItem
})(withListTodo);

ListTodo.propTypes = {
    getTodo: PropTypes.func,
    todoItems: PropTypes.object
};