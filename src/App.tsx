import styles from './App.module.css'

import { Header } from './components/Header';

import './App.module.css'
import { TodoList } from './components/TodoList';

import './globals.css';

function App() {
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>                    
          <main>
              <TodoList />                  
          </main>
      </div>
    </div>

  )
}

export default App
