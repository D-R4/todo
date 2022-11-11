import {ReactComponent as ReactImg} from '../assets/group.svg'
import { useState } from 'react';

function ToDoForm({addTask}){
    const [userInput, setUserInput] = useState('')


    const handleChange = (e) =>{
        setUserInput(e.target.value)
    };
    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    return(
        <form className='add-task' onClick={handleSubmit}>
            <ReactImg onClick={addTask}/>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onSubmit={handleSubmit}
                placeholder='Новая задача'
             />
        </form>
            
        
    )
}
export default ToDoForm