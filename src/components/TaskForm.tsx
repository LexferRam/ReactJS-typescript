import { ChangeEvent, useRef } from 'react'
import { FormEvent } from 'react'
import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Task } from '../interfaces/task.interface'

interface Props {
    addNewTask : (task: Task) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>

const initialState = {
    title:'',
    description:''
}

const TaskForm = ({addNewTask}:Props) => {

    const [task,setTask] = useState<Task>(initialState)
    const inputTitle = useRef<HTMLInputElement>(null)

    const handleInputChange = ({target: {name, value}}:HandleInputChange)  => {
        setTask({...task,[name]: value})
    }

    const handleNewTask = (e:FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        addNewTask(task)
        setTask(initialState)
        inputTitle.current?.focus()
    }

    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Add Task</h1>

            <form onSubmit={handleNewTask}>
                <input 
                   ref={inputTitle}
                   type="text" 
                   placeholder="Write a title" 
                   name='title' 
                   value={task.title}
                   className='form-control mb-3 rounded-0 shadow-none border-0' 
                   onChange={handleInputChange}
                   autoFocus
                />

                <textarea
                 name='description' 
                 value={task.description}
                 cols={30} 
                 rows={10}
                 placeholder='Write a Description'
                 className='form-control mb-3 shadow-none border-none'
                 onChange={handleInputChange}
                 ></textarea>
                 <button className='btn btn-primary'>
                     Save
                     <AiOutlinePlus />
                </button>
            </form>
        </div>
    )
}

export default TaskForm
