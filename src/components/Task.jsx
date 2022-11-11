import {ReactComponent as ReactLogo} from '../../src/assets/remove1.svg'
import '../assets/Task.css'
function Task( {todo, toggleTask, removeTask} ) {
    return (
        <div key={todo.id} className="task">
            <div className="t">{todo.task}</div>
            
            <div className="delete-task" onClick={() => removeTask(todo.id)}>
                <ReactLogo />
            </div>
        </div>
    )
}
export default Task