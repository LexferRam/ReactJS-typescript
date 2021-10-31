import { Task } from "../interfaces/task.interface"
import TaskCard from "./TaskCard"

interface Props {
    tasks: Task[];
    deleteTask : (id: number) => void;
}


const TaskList = ({ tasks,deleteTask }: Props) => {
    return (
        <>
            {tasks.map(task => (
                <div key={task.id} className="col-md-4 pb-2">
                    <TaskCard deleteTask={deleteTask} task={task} />
                </div>
            ))}
        </>
    )
}

export default TaskList
