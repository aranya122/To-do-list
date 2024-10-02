import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import Edit from "./Edit";

const Todolist = () => {
    const [todovalue, setTodo] = useState([]);

    const createTodo = (task) => {
        setTodo([...todovalue, {
            id: uuidv4(),
            task: task,
            isEditing: false,
            isCompleted: false,
        }]);
    };

    const deleteTodo = id => {
        setTodo(todovalue.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodo(todovalue.map(todo =>
            todo.id === id ? {
                ...todo,
                isEditing: !todo.isEditing
            } : todo))
    }

    const editTask = (task, id) => {
        setTodo(todovalue.map(todo => todo.id === id ? { ...todo, task, isEditing:false } : todo))
    }

    const markcompleted = id => {
        setTodo(todovalue.map(todo =>
            todo.id === id ? {
                ...todo,
                isCompleted: !todo.isCompleted
            } : todo))
    }

    return (
        <div className='container bg-blue-200 w-1/2 mt-20 p-6 rounded-md mx-auto'>
            <h1 className=" text-2xl font-bold">To Do List</h1>

            <Form createTodo={createTodo} />
            {
                todovalue.map((todo) => (
                    todo.isEditing ? (
                        <Edit key={todo.id} editTodo={editTask} task={todo} />
                    ) : (
                        <Todo
                            task={todo.task}
                            id={todo.id}
                            key={todo.id}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                            markcompleted={markcompleted}
                            isCompleted={todo.isCompleted}
                        />

                    )

                ))

            }
        </div>
    );
};

export default Todolist
