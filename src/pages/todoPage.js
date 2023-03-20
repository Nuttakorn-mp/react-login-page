import { useState } from 'react';
import '../App.css';
let nextId = 3;
function TodoPage() {
    let initialArtists = [
        { id: 0, value: 'Apple' },
        { id: 1, value: 'Mango' },
        { id: 2, value: 'Tomato' },
    ];

    const [todoName, setTodoName] = useState('');
    const [TodoList, setTodo] = useState(initialArtists);
    return (
        <>
            <div className='centerAll'>
                <h1>
                    Todo List
                </h1>
                <input
                    value={todoName}
                    onChange={e => setTodoName(e.target.value)}
                />
                <button onClick={() => {
                    setTodo([
                        ...TodoList,
                        { id: nextId++, value: todoName }
                    ]);
                }}>Add</button>
            </div>
            <div className='centerAll'>
                <ul>
                    {TodoList.map(item => (
                        <li key={item.id}>
                            {item.value}
                            <p className='inline-button'>
                                <button onClick={() => {
                                    setTodo(
                                        TodoList.filter(a =>
                                            a.id !== item.id
                                        )
                                    );
                                }}>
                                    Delete
                                </button></p>
                        </li>
                    ))}
                </ul>
            </div>


        </>

    );
}

export default TodoPage