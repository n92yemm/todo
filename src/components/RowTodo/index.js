import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import './styles.css';

const RowTodo = (props) => {
    const { changeItemHandler, editItemHandler } = props;
    const { text, checked } = props.todoItem;
    return (
        <div className="todoItem paddingElem">
            <Field 
                name="isTodoItemChecked" 
                type='checkbox' 
                component="input" 
                checked={ checked } 
                onClick={ changeItemHandler } />
            <span className={checked ? 'checkedTodo textTodo' : 'textTodo'} onClick={ editItemHandler } >{ text }</span>
        </div>
    );
};

export default RowTodo;

RowTodo.propTypes = {
    changeItemHandler: PropTypes.func,
    editItemHandler: PropTypes.func,
    todoItem: PropTypes.shape({
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
    })
};
