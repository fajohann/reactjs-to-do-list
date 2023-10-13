import styles from './TodoList.module.css'
import { v4 } from 'uuid';
import { useState } from 'react'

import { AddTaskForm } from './AddTaskForm';
import { TaskType } from './Task';
import iconClipboard from './assets/clipboard.png'
import iconTaskCheck from './assets/task-check.svg'
import iconTaskUncheck from './assets/task-uncheck.svg'
import iconTrash from './assets/trash.svg'


export function TodoList() {

  const [tasks, setTasks] = useState(
    [
      {
        id: v4(),
        content: 'Arrumar a Cama',
        isCompleted: true,
      },
      {
        id: v4(),
        content: 'Brincar com Fião',
        isCompleted: true,
      },
      {
        id: v4(),
        content: 'Estudar Typescript',
        isCompleted: true,
      },
      {
        id: v4(),
        content: 'Treinar',
        isCompleted: false,
      },
      {
        id: v4(),
        content: 'Ir no Afonso Padilha',
        isCompleted: false,
      },
    ]
  );

  const addTask = (task:TaskType) => setTasks([...tasks,task]);

  const deleteTask = (id:string) => () => {
    console.log(`delete Task: ${id}`)
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id
    });        
    setTasks(tasksWithoutDeletedOne);     
  }

  const updateTask = (id:string) => () => {
    console.log(`update Task: ${id}`)
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  const countCompletedTasks = tasks.reduce((count, task) => {
    if (task.isCompleted === true) return count += 1;
    return count
  }, 0);
  
    return (
        <div className={styles.todoList}>
            <div className={styles.todoListForm}>
              <AddTaskForm addTask={addTask} />
            </div>
            <div className={styles.tasks}>
              <div className={styles.info}>
                <div className={styles.div}>
                  <div className={styles.textCountTasks}>Tarefas criadas</div>
                  <div className={styles.counter}>
                    <div className={styles.textCounter}>{tasks.length}</div>
                  </div>
                </div>
                <div className={styles.div}>
                  <div className={styles.textCompletedTasks}>Concluídas</div>
                  <div className={styles.counter}>
                    <div className={styles.textCounter}>{`${countCompletedTasks} de ${tasks.length}`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tasks}>
              {!tasks.length 
                ? 
                (
                  <div className={styles.empty}>
                    <img className={styles.clipboard} src={iconClipboard} />
                    <p className={styles.emptyText}>
                      <span className={styles.emptySpan}>Você ainda não tem tarefas cadastradas<br /></span>
                      <span className={styles.emptyTextWrapper}>Crie tarefas e organize seus itens a fazer</span>
                    </p>
                  </div>                  
                ) 
                :
                (      
                    <div className={styles.list}>
                      {tasks.map((task) => (
                        <div className={task.isCompleted ? styles.taskCheck : styles.taskUncheck} key={task.id}>
                          <button onClick={updateTask(task.id)}>
                            <img className={styles.imgTask} src={task.isCompleted ? iconTaskCheck : iconTaskUncheck} />
                          </button>
                          <p className={task.isCompleted ? styles.taskTextCompletedWrapper : styles.taskTextWrapper}>
                            {task.content}
                          </p>                         
                          <button onClick={deleteTask(task.id)}><img className={styles.imgTask} src={iconTrash} /></button>
                        </div>
                        ))
                      }
                    </div>                              
                )
              }
            </div>            
        </div>
    )
}