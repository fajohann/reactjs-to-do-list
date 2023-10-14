import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './AddTaskForm.module.css'
import plus from './assets/plus.svg'

import { TaskType } from './Task';
import { v4 } from 'uuid';

interface AddTaskFormProps {
    addTask: (task: TaskType) => void
}

export function AddTaskForm( {addTask} : AddTaskFormProps ) {

    const [taskContent,setTaskContent] = useState('')

    function handleAddNewTask(event : FormEvent) {
        event.preventDefault()
        const newTask:TaskType = {
            id: v4(),
            content: taskContent,
            isCompleted: false,
        };             
        addTask(newTask)
        setTaskContent("")
    }

    function handleNewTaskChange(event : ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setTaskContent(event.target.value)        
    }

    function handleNewTaskInvalid(event : InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    const isNewTaskEmpty = taskContent.length === 0

    return (
        <div className={styles.addTaskForm}>
            <form onSubmit={handleAddNewTask}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    name="taskContent"                
                    value={taskContent}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button type='submit' disabled={isNewTaskEmpty}>
                    Criar <img className={styles.plus} src={plus} />
                </button>
            </form> 
        </div>        
        
    )
}