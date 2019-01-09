import React from "react";
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'

const App = () => {
    const data = [
        {id: 1, label: 'Drink Coffee', important: false},
        {id: 2, label: 'Build awesome app', important: true},
        {id: 3, label: 'Have a lunch', important: false},
    ];
    return (
        <div>
            <AppHeader toDo={1} done={2}/>
            <SearchPanel/>
            <TodoList data={data}/>
        </div>
    );
};


export default App