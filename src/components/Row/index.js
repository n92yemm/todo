import React from 'react';
import { Field } from 'redux-form';

import './styles.css';

let Row = (props) => {
    let { isCheckedChanged, text } = props;
    return (
        <div>
            <Field checked={isCheckedChanged} type='checkbox' />
            <span>{ text }</span>
        </div>
    );
};

export default Row;