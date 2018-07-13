import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import './styles.css';

const RowTodo = (props) => {
    const { changeItemHandler, editItemHandler } = props;
    const { text, checked, _id } = props.todoItem;
    return (
        <div className="todoItem paddingElem">
            <Field 
                name={`${_id}`} 
                type='checkbox' 
                component="input" 
                checked={ checked } 
                onClick={ changeItemHandler } />
            <Field 
                editItemHandler={editItemHandler}
                classes={ checked ? 'checkedTodo textTodo' : 'textTodo'} 
                name={`${_id}.text`} 
                text={text}
                type='text' 
                //component="input" 
                component={({ editItemHandler, classes, text }) => 
                    <input type="text" onChange={ editItemHandler } 
                        className={ classes } value={ text } 
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
