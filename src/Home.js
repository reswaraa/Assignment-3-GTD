import TodoList from "./TodoList";
import { useEffect,useState } from "react";
import useFetch from './useFetch';

const Home = () => {
    const {data:todolists, error} = useFetch("http://localhost:8000/lists")
    return (
        <>
            <div className="home">
                <div className='header'>
                    <h3>Title</h3>
                    <h3>Due To</h3>
                </div>
                {todolists && todolists.map(list=>{
                    return <TodoList key={list.id} list={list}/>
                })}
            </div>
        </>
    );
}
 
export default Home;