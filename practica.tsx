import {useState, ChangeEvent} from 'react'   

interface Props{
    title?:string,
    addNewTask : (task:Task) => void
}

interface Task{
    id: number;
    title?:string;
    description:string;
    completed?:boolean;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const App = ({title}: Props):JSX.Element => {

    const [task, setTask] = useState<Task[]>([])

    const handleInputChange = ({target:{name, value}}:HandleInputChange) => {
        setTask({...task, [name]:value})
    }

    return(<></>)
}

export default App