import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Calendar from "./components/Calendar";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";
import { theme } from "./themes/theme";

function App() {
  let [todo, setTodo] = useState([""]);
  let [item, setItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setTodo(json.todo);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <head>
          <title>Naina's todo list</title>
        </head>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route
                path="todo"
                element={
                  <Todo
                    todo={todo}
                    setTodo={setTodo}
                    item={item}
                    setItem={setItem}
                  />
                }
              />
              <Route path="calendar" element={<Calendar />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
