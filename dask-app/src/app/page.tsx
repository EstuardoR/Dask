// eslint-disable-next-line @typescript-eslint/no-unused-vars
import layout from './layout';
import styles from '../page.module.css'
import TodoCard from './components/todo-card/todo-card';

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <h1>Let`s work</h1>
      </div>

      <div className={styles.taskList} >
        <TodoCard text='Hacer tarea de algoritmos :) !' />
        <TodoCard text='Limpiar mi escritorio' />
        <TodoCard text='Sacar a pasear a mi perro' />
      </div>

    </div>
  );
}
