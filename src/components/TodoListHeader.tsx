import { Counter } from './Counter';
import { TaskType } from './Task';
import styles from './TodoListHeader.module.css'

interface TodoListHeaderProps {
    tasks: TaskType[];    
}

export function TodoListHeader({tasks}:TodoListHeaderProps) {

    const countCompletedTasks = tasks.reduce((count, task) => {
        if (task.isCompleted === true) return count += 1;
        return count
    }, 0);

    return(
        <header className={styles.tasksHeader}>
            <div className={styles.info}>
                <div className={styles.tasksCounterContainer}>
                    <span className={styles.textCountTasks}>Tarefas criadas</span>
                    <Counter content={tasks.length}/>                
                </div>
                <div className={styles.tasksCounterContainer}>
                    <span className={styles.textCompletedTasks}>Concluídas</span>
                    <Counter content={(tasks.length === 0) ? tasks.length : `${countCompletedTasks} de ${tasks.length}`}/>                
                </div>
            </div>
        </header>
    )
}