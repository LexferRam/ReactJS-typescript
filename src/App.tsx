import { useState } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/task.interface';
import logo from './logo.svg'

// creacion de custom types con interface
// si queremos una propiedad que sea cualquier tipo de dato usamos "any"
interface Props {
  title?: string // ? hace que la propiedad sea opcional
}

export function App({ title }: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    // {
    //   id: 1,
    //   title: "Learn react",
    //   description: "Learn react",
    //   completed: false
    // }
  ])

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addNewTask = (task: Task) => {
    setTasks([
      ...tasks,
      {...task, id: getCurrentTimestamp(), completed: false},
    ])
  }

  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id))

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>

      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList deleteTask={deleteTask} tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


