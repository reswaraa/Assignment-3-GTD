import {Link} from 'react-router-dom'
import './TodoList.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import useFetch from './useFetch';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({list}) => {
    const [isChecked, setIsChecked]=useState(list.completed);
    const listUpdateIsCompleted=list;
    const handleChecked=()=>{
        setIsChecked(!isChecked)
        listUpdateIsCompleted.completed=isChecked;
        fetch("http://localhost:8000/lists/"+list.id,{
            method : "PUT",
            body : JSON.stringify(listUpdateIsCompleted),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }, 
        }).then(response => response.json())
    }
    return (
    <>
    <div className="todo-list">
            <div className="todolist-preview" key={list.id}>
                <div className='todolist-kiri'>
                    <span>
                        <button className={`check-btn ${list.completed ? '' : 'uncheck-btn'}`} onClick={handleChecked}>
                            {list.completed? <FontAwesomeIcon icon={faCheck} />: ""}
                        </button>
                    </span>
                    <span className={`priority-mark 
                    ${(list.priority=="low")? 'priority-low' : 
                    ((list.priority=="medium")? 'priority-medium' : 'priority-high')}`}>
                        <FontAwesomeIcon icon={faCircle} size='xs' />
                    </span>
                    <span>
                        <Link to={`/lists/${list.id}`} className="link">
                        <span className='title'>{list.title}</span>
                        </Link>
                    </span>
                </div>
                <p>{list.dueDate}</p>
            </div>
    </div>
    </> 
    );
    
}
 
export default TodoList;