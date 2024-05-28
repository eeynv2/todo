import {createBrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Todo from "./components/Todo";
import React , {useState} from "react";

let [todo, setTodo] = useState([""]);
let [item, setItem] = useState("");

export const router = createBrowserRouter([

    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "/Todo",
        element: <Todo todo={todo} setTodo={setTodo} item={item} setItem={setItem}/>
    },
    {
        path: "/Calendar",
        element: <Calendar />
    }
])




export default router;
