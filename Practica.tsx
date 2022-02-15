// import {useState, ChangeEvent, FormEvent} from 'react'  

// interface Task{
//     id:number,
//     title:string,
//     description:string,
//     completed:boolean
// }

// interface Props{
//     title?:string,
//     addNewTask: (task:Partial<Task>) => void
// }

// type HandleEventChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

// const App = ({title, addNewTask}:Props): JSX.Element => {

//     const [task, setTask] = useState<Partial<Task>>({})
//     const [tasks, setTasks] = useState<Task[]>([])
    

//     const handleInputChange = ({target:{name,value}}:HandleEventChange):void => {
//         setTask({...task,[name]:value})
//     }

//     const handleNewTask = (e:FormEvent<HTMLFormElement>):void =>{
//         addNewTask(task)
//     }

//     return(<></>)
// }

import {useContext,createContext, PropsWithChildren, ReactNode} from 'react' 

interface IAppContext{
    title?:string
}

const defaultState = {
    title:"default title"
}