import styles from './App.module.css'

import { Header } from './Header';

import './App.module.css'
import { TodoList } from './TodoList';

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
