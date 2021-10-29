import { Task } from "../interfaces/task.interface"
import TaskCard from "./TaskCard"

interface Props {
    tasks: Task[];
}


const TaskList = ({ tasks }: Props) => {
    return (
        <>
            {tasks.map(task => (
                <div className="col-md-4">
                    <TaskCard task={task} />
                </div>
            ))}
        </>
    )
}

export default TaskList
