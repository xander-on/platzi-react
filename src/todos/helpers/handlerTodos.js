

export const handlerTodos = (todos, saveTodos) => {

    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id-1].completed = !newTodos[id-1].completed;
        saveTodos( newTodos );
    }
    
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id-1].deleted = true;
        saveTodos( newTodos );
    }
    
    return {completeTodo, deleteTodo};
} 