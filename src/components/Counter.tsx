import styles from './Counter.module.css'

interface CounterProps {
    content:string|number;
}

export function Counter({content}:CounterProps) {
    return (
        <div className={styles.counter}>
            <span className={styles.textCounter}>{content}</span>
        </div>
    )
}

