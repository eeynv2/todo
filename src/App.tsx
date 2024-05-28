import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import {DndContext} from '@dnd-kit/core';
//import {Draggable} from './Draggable';
//import {Droppable} from './Droppable';
import './App.css';
import Calendar from './components/Calendar';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Todo from './components/Todo';


function App() { 
  let [todo, setTodo] = useState([""]);
  let [item, setItem] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/todo')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            setTodo(json.todo);
        });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo todo={todo} setTodo={setTodo} item={item} setItem={setItem} />} />
          <Route path="calendar" element ={<Calendar/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )}

export default App;
