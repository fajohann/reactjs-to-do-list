import styles from './Task.module.css'
import { FormEvent } from 'react'

import iconTaskChecked from './assets/task-checked.svg'
import iconTaskCheckedHover from './assets/task-checked-hover.svg'
import iconTaskUnchecked from './assets/task-unchecked.svg'
import iconTaskUncheckedHover from './assets/task-unchecked-hover.svg'
import iconTrash from './assets/trash.svg'
import iconTrashHover from './assets/trash-hover.svg'

export interface TaskType {
    id: string;
    content: string;
    isCompleted: boolean;
  }
  
interface TaskProps {
    task: TaskType,
    onUpdateTask: (task: TaskType) => void,
    onDeleteTask: (task: TaskType) => void,
}

export function Task( {task, onUpdateTask, onDeleteTask} : TaskProps) {
    
    const handleUpdateTask = (event : FormEvent) => {
        event.preventDefault()        
        onUpdateTask(task)
    }

    const handleDeleteTask = (event : FormEvent) => {
        event.preventDefault()        
        onDeleteTask(task)
    }

    return (
        <li className={task.isCompleted ? styles.taskChecked : styles.taskUnchecked} key={task.id}>                          
            <button onClick={handleUpdateTask}>
                <img 
                className={styles.imgTask} 
                src={task.isCompleted ? iconTaskChecked : iconTaskUnchecked}
                onMouseEnter={ e =>(e.currentTarget.src = task.isCompleted ? iconTaskCheckedHover : iconTaskUncheckedHover)}
                onMouseLeave={ e =>(e.currentTarget.src = task.isCompleted ? iconTaskChecked : iconTaskUnchecked)}     
                />
            </button>
            <p className={task.isCompleted ? styles.taskTextCompletedWrapper : styles.taskTextWrapper}>
                {task.content}
            </p>                         
            <button className={styles.btnDeleteTask} onClick={handleDeleteTask}>
                <img 
                className={styles.imgDeleteTask} 
                src={iconTrash}
                onMouseEnter={ e =>(e.currentTarget.src = iconTrashHover)}
                onMouseLeave={ e =>(e.currentTarget.src = iconTrash)}                               
                />
            </button>
        </li>
    )
}