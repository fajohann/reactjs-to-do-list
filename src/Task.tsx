import styles from './Task.module.css'

export interface TaskType {
    id: string;
    content: string;
    isCompleted: boolean;
  }
  
interface TaskProps {
    task: TaskType
}

export function Task( {task} : TaskProps) {
    return (
        <li className={styles.task}>
            <input type="checkbox" name="" id="" />
            <span>{task.content}</span>
            <button><a href="#">Excluir</a></button>
        </li>
    )
}