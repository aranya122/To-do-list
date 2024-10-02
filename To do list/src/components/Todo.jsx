import React from "react";
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from "react-icons/md";

const Todo = ({ task, id, deleteTodo, editTodo, markcompleted, isCompleted }) => {
    return (
        <div className={`flex justify-between items-center bg-black text-white py-2 px-4 rounded-md mb-2 sm:py-3 sm:px-6 md:py-4 md:px-8lg:py-5 lg:px-10${isCompleted ? 'line-through' : ''}`}>
            <p 
              className='font-primary cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl'
              onClick={() => markcompleted(id)}
            >
              {task}
            </p>
            <div className='flex items-center gap-x-3 sm:gap-x-4'>
                <AiFillEdit className='text-lg 
                    sm:text-xl 
                    md:text-2xl 
                    lg:text-3xl cursor-pointer'
                onClick={() => editTodo(id)} />
                <MdDelete className='text-lg 
                    sm:text-xl 
                    md:text-2xl 
                    lg:text-3xl cursor-pointer' 
                onClick={() => deleteTodo(id)} />
            </div>
        </div>
    );
};

export default Todo
