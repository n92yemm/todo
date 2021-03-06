import React from 'react';
import PropTypes from 'prop-types';

import RowTodo from '../RowTodo';
import './styles.css';

const ListContainer  = (props) => {  
    const { todo, changeTodoItemChecked, editTodoItem } = props;
    return (
        <div>
            { todo.map((item) => {
                return (
                    <RowTodo 
                        key={item._id}
                        changeItemHandler={() => changeTodoItemChecked(item)}
                        editItemHandler={value => editTodoItem({...item, text: value }) }
                        todoItem={ item }
                    />);
            })
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