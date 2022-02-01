import {useState} from 'react'  

interface Props{
    title?: string;
}

interface Task{
    id:number;
    title?:string;
    description:string;
    completed?:boolean;
}

export function App({title}: Props){

    const [task, setTask] = useState<Task[]>([])

    return(null)
}