import React, { useState } from 'react'

const Form = ({ createTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            createTodo(value);
            setValue('')
        }
    }

    return (
        <form className='mb-4 font-primary w-full'
            onSubmit={handleSubmit}>
            <input type="text" className='outline-none
            bg-transparent border border-gray-500 p-4 w-[300px]
            text-black mb-6 rounded font-extrabold placeholder:text-black'
                placeholder='What Task do you have?'
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button className='bg-gray-700 border-none p-2
            text-white cursor-pointer rounded ml-2'>Add Task</button>

        </form>
    )
}
export default Form