import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Completed = () => {
    const {data:todolist, error}= useFetch("http://localhost:8000/lists")
    return (
        <>
        <div className='header'>
            <h3>Title</h3>
            <h3>Due To</h3>
        </div>
        <div className="completed-todo">
            {todolist && todolist.filter(list=>(list.completed)).map((listt)=>{
                return(
                    <>
                        <div className="todolist-preview">
                            <div>
                            <span className={`priority-mark 
                            ${(listt.priority=="low")? 'priority-low' : 
                            ((listt.priority=="medium")? 'priority-medium' : 'priority-high')}`}>
                                <FontAwesomeIcon icon={faCircle} size='xs' />
                            </span>
                                <span>
                                    <Link to={`/lists/${listt.id}`} className="link">
                                    <span className='title'>{listt.title}</span>
                                    </Link>
                                </span>
                            </div>
                            <p>{listt.dueDate}</p>
                        </div>
                    </>
                )
            })}
        </div>
        </>
    );
}
 
export default Completed;