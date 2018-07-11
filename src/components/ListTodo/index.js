import React from 'react';
import { connect } from 'react-redux';
import { FieldArray, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { changeTodoItemChecked } from '../../actions/changeTodoItemChecked';
import { getTodo, initForm } from '../../actions/getTodoItems';
import { editTodoItem } from '../../actions/editTodoItem';
import './styles.css';
import ListContainer from '../ListContainer';
import { LIST_TODO_FORM } from '../../constants/forms';

class ListTodo extends React.Component {
    componentDidMount() {
        this.props.getTodo();
        this.props.initForm();
    }
    render() {
        const { todoItems: { items }, changeTodoItemChecked, editTodoItem } = this.props;
        return (
            <form id="listTodo">
                { items && <div>
                    <FieldArray
                        name="FieldArray"
                        todo={ items }
                        component={ListContainer}
                        changeTodoItemChecked={changeTodoItemChecked}
                        editTodoItem={editTodoItem}
                    />
                </div> }
            </form>
        );
    }
}

const withListTodo = reduxForm({
    form: LIST_TODO_FORM
})(ListTodo);

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoItems
    };
};

export default connect(mapStateToProps, {
    getTodo,
    initForm,
    changeTodoItemChecked,
    editTodoItem
})(withListTodo);

ListTodo.propTypes = {
    getTodo: PropTypes.func,
    initForm: PropTypes.func,
    todoItems: PropTypes.object,
    changeTodoItemChecked: PropTypes.func,
    editTodoItem: PropTypes.func,
};