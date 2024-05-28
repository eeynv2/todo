import React, {useState} from 'react';
import Todo from './Todo';

let [todo, setTodo] = useState([""]);
let [item, setItem] = useState("");
const TodoPage = ()=>{
    return(
        <div>
            TodoPage
            <Todo todo={todo} setTodo={setTodo} item={item} setItem={setItem}/>
        </div>
    );
};
export default TodoPage;