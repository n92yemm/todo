import React from 'react';
import PropTypes from 'prop-types';

import RowTodo from '../RowTodo';
import './styles.css';

const ListContainer  = (props) => {  
    const { todo, changeTodoItemChecked, editTodoItem } = props;
    return (
        <div>
            { todo.map((item) => 
                <RowTodo 
                    key={item._id}
                    changeItemHandler={() => changeTodoItemChecked(item)}
                    editItemHandler={() => {console.log('edit');editTodoItem(item);}}
                    todoItem={ item }
                />) 
            }
        </div>
    );
};

ListContainer.propTypes = {
    todo: PropTypes.array,
    changeTodoItemChecked: PropTypes.func,
    editTodoItem: PropTypes.func
};

export default ListContainer;