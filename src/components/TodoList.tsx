import styles from './TodoList.module.css'
import { useState } from 'react'

import { CreateTaskForm } from './CreateTaskForm';
import { Task,TaskType } from './Task';
import { TodoListEmpty } from './TodoListEmpty';
import { TodoListHeader } from './TodoListHeader';


export function TodoList(){

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const createTask = (task:TaskType) => setTasks([...tasks,task]);

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

    return (
        <div className={styles.todoList}>
            <CreateTaskForm onCreateTask={createTask} />  
            <TodoListHeader tasks={tasks} />          
           
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