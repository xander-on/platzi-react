
export const getTodos = (todos, searchValue) => {
    const todosAvailable = todos.filter( todo => !todo.deleted );
    const completedTodos = todosAvailable.filter( todo => !!todo.completed ).length;
    const totalTodos     = todosAvailable.length;

    const searchedTodos  = todosAvailable.filter( todo => 
        (
            todo.description.toLowerCase().includes(searchValue.toLowerCase()) 
            && !todo.deleted
        )
    );

    return { completedTodos, totalTodos, searchedTodos }
}
