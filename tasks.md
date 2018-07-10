# вынести валидацию из компонента ; redux-form validate
# поменять структуру в редакс-формах values: хеш-таблица
# component='input'
# initial value
# в state error -> 
# eslint config


<form id="listTodo">
                {
                    items && <div>
                        { items.map((item, index) => 
                            <FieldArray 
                                todoItem={ item } 
                                changeItemHandler={this.changeItemHandler(item)} 
                                editItemHandler={this.editItemHandler(item)} 
                                name={`${item._id}`} 
                                component={RowTodo} 
                                key={index}
                            />) 
                        }
                    </div>
                }
            </form>