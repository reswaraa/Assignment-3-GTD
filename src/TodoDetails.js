import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './TodoDetails.css';
import { Link } from 'react-router-dom';

const TodoDetails = () => {
    const {id} = useParams();
    const {data:todolist, error} = useFetch('http://localhost:8000/lists');
    const history=useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/lists/'+id,{
            method: 'DELETE'
        }).then(()=>{
            history.push("/")
        })
    }

    return (
        <div className="todo-details" key={id}>
            <h2>Details Todo</h2>
            {todolist && todolist.filter(list=>(list.id==id)).map(listt=>(
                    <>
                        <div className="todo-details" key={id}>
                            <p className='label'>Title</p>
                            <p className='content-details'>{listt.title}</p>
                            <p className='label'>Description</p>
                            <p className='content-details'>{listt.description}</p>
                            <p className='label'>Due Date</p>
                            <p className='content-details'>{listt.dueDate}</p>
                            <p className='label'>Priority</p>
                            <p className='content-details'>{listt.priority}</p>
                        </div>
                        <button onClick={handleClick}>Delete Todo</button>
                        <button>
                            <Link to={`/edit/${listt.id}`} className="edit-btn">Edit Todo</Link>
                        </button>
                    </>
            ))}
        </div>
    );
}
 
export default TodoDetails;