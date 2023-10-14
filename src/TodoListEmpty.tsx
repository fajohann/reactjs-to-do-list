import styles from './TodoListEmpty.module.css'
import iconClipboard from './assets/clipboard.png'

export function TodoListEmpty() {
    return (
        <div className={styles.empty}>
            <img className={styles.clipboard} src={iconClipboard} />
            <p className={styles.emptyText}>
                <span className={styles.emptySpan}>Você ainda não tem tarefas cadastradas<br /></span>
                <span className={styles.emptyTextWrapper}>Crie tarefas e organize seus itens a fazer</span>
            </p>
        </div> 
    )
}