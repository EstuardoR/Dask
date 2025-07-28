import styles from '@/app/components/todo-card/todo-card.module.css'

interface TodoProps {
    text?: string;
}

const TodoCard: React.FC<TodoProps> = ({ text }) => {

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}

export default TodoCard;
