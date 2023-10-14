import styles from './TodoList.module.css'
import { useState } from 'react'

import { AddTaskForm } from './AddTaskForm';
import { Task,TaskType } from './Task';
import { TodoListEmpty } from './TodoListEmpty';


export function TodoList(){

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const addTask = (task:TaskType) => setTasks([...tasks,task]);

  const deleteTask = (taskToDelete:TaskType) => {
    console.log(`delete Task: ${taskToDelete.id}`)
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete.id
    });        
    setTasks(tasksWithoutDeletedOne);
  };

  const updateTask = (taskToUpdate:TaskType) => {
    console.log(`update Task: ${taskToUpdate.id}`)
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskToUpdate.id) {
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
            <AddTaskForm addTask={addTask} />            
            
            <header className={styles.tasks}>
              <div className={styles.info}>
                <div className={styles.div}>
                  <span className={styles.textCountTasks}>Tarefas criadas</span>
                  <div className={styles.counter}>
                    <span className={styles.textCounter}>{tasks.length}</span>
                  </div>
                </div>
                <div className={styles.div}>
                  <span className={styles.textCompletedTasks}>Concluídas</span>
                  <div className={styles.counter}>
                    <span className={styles.textCounter}>{(tasks.length === 0) ? tasks.length  : `${countCompletedTasks} de ${tasks.length}`}</span>
                  </div>
                </div>
              </div>
            </header>

            <section className={styles.tasks}>
              {!tasks.length 
                ? ( <TodoListEmpty />) 
                : ( 
                  <ul className={styles.list}>
                    {tasks.map((task) => (
                        <Task 
                          key={task.id} 
                          task={task} 
                          onUpdateTask={updateTask} 
                          onDeleteTask={deleteTask} />                      
                      ))
                    }
                  </ul>                  
                )
              }
            </section>            
        </div>
    )
}