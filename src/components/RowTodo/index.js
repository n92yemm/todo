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
            <Field 
                onChange={ editItemHandler } 
                className={ checked ? 'checkedTodo textTodo' : 'textTodo'} 
                name="todoItemText" 
                type='text' 
                //component="input" 
                component={() =>
                    <input type="text" 
                        onChange={ editItemHandler } 
                        className={ checked ? 'checkedTodo textTodo' : 'textTodo'}  
                        value={ text } 
                    />
                }
            />
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
