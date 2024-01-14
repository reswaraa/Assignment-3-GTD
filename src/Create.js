import {useState} from 'react';
import './Create.css';
import { useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const Create = () => {
    const [title,setTitle]=useState('');
    const [priority,setPriority]=useState('low');
    const [description, setDescription]=useState('')
    const [dueDate, setDueDate]=useState('')
    const completed = false;
    const history=useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const todo={title, priority, description, dueDate, completed};
        fetch("http://localhost:8000/lists",{
            method: 'POST',
            headers : {"Content-Type" : "aplication/json"},
            body : JSON.stringify(todo)
        })
        history.push('/');
    }
    
    return (
        <>
        <div className="create">
            <h2>Create a new Todo</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <label className='atribute'>Title</label>
                <input 
                className='atribute'
                type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label className='atribute'>Priority</label>
                <select
                className='atribute'
                value={priority}
                onChange={(e)=>setPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <label className='atribute'>Due Date</label>
                <input 
                className='atribute'
                type="date" 
                required
                value={dueDate}
                onChange={(e)=>setDueDate(e.target.value)}
                />
                <label className='atribute'>Description</label>
                <textarea
                className='atribute'
                required
                value={description}
                onChange={(e)=>setDescription(e.target.value)}></textarea>
                <button>Add Todo</button>
            </form>
        </div>
        </>
    );
}
 
export default Create;