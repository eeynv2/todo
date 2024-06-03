import { ThemeProvider } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Calendar from './components/Calendar';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Todo from './components/Todo';

const theme = createTheme({
  palette:{
    primary:{
      main: '#FF69B4'
    },
    secondary:{
      main: '#89CFF0' 
    }
  }
});
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
   
<ThemeProvider theme = {theme}>
    <div className="App">
       <head><title>Naina's todo list</title></head>
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
  </ThemeProvider>
  );
  };

export default App;
