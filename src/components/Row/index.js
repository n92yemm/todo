import React from 'react';
import { Field } from 'redux-form';

import './styles.css';

const Row = (props) => {
    //console.log(props)
    let { changeItemHandler, todoItem } = props;
    let { text, checked } = props.todoItem;
    return (
        <div>
            <Field 
                name="isTodoItemChecked" 
                type='checkbox' 
                component="input" 
                checked={ checked } 
                onClick={ changeItemHandler(todoItem) } />
            <span>{ text }</span>
        </div>
    );
};

export default Row;
