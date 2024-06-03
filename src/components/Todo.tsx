import React, { Dispatch, SetStateAction } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Stack } from '@mui/system';
import Button from '@mui/material/Button';
import { css } from '@emotion/css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface TodoProp{
    item: string;
    setItem: Dispatch<SetStateAction<string>>;
    todo: string[];
    setTodo: Dispatch<SetStateAction<string[]>>;
};



function Todo( {item, setItem, todo, setTodo}:TodoProp) {
    function onDragEnd (result:DropResult){
        const updatedTodo = Array.from(todo);
        const [draggedItem] = updatedTodo.splice(result.source.index, 1);
        updatedTodo.splice(result.destination!.index, 0, draggedItem);
        setTodo(updatedTodo);
     }

return (
    
    <div className="App">
        <div className = "TodoButtons">
    <Stack spacing={2} direction="row" className = "TextBox">
    <input type="text" id="item" name="item" onChange = {(event)=>{
    setItem(event.target.value);
    }}/> 
    <Button startIcon ={<AddCircleIcon/>}
    variant = "outlined"
    className={css`
    padding-right: 8px;
    height: 1cm;
    width: 2.5cm;
    font-family: Roboto;
    font-style: bold;
    background-color: #c5ecfc;
    border-color: black;
    border-size: 20px;
    border-style: double;
    font-size: 14px;
    border-radius: 4px;
    color: blank;
    justify-content: space-around;
    &:hover {
      color: purple;
      border-color: black
    }
  `}
    onClick = {(event)=> {
    let newTodo = [...todo];
    newTodo.push(item);
    setTodo(newTodo);
    }}>Add</Button>
    <Button startIcon={<DeleteIcon />}
    variant = "outlined" 
    className = {css`
    background-color: #c5ecfc;
    &:hover{
        color: white;
    }
`}
    onClick = {(event)=> {
    setTodo([]);
    }} >Clear</Button>
  </Stack>
  </div>
  <div className = "TodoBox">
   <DragDropContext onDragEnd = {onDragEnd}>    
    <Droppable droppableId = "todoList">
        {(provided)=>
    <ol style={{ listStyle: 'none' }} className = "todoList" {...provided.droppableProps}ref = {provided.innerRef}>
        {
    todo.map((value, index) => {
        return (
        <Draggable key = {value} draggableId = {value} index ={index}>
            {(provided) => (
        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className = "ListItems">
            {index+1}. {value}
            <div className = "todoListButtons">
            <IconButton onClick = {(event)=> {
            let newTodo = [...todo];
            newTodo.splice(index, 1);
            setTodo(newTodo);
            }}>
                <DeleteIcon/>
            </IconButton>
            <IconButton className = "EditButton" onClick = {(event)=> {
            let newTodo = [...todo];
            newTodo.splice(index, 1, item);
            setTodo(newTodo);
            }}>
                <EditIcon/>
            </IconButton>
            {(index !== 0) && <Button startIcon ={<ArrowUpwardIcon/>}
             onClick = {(event)=> {
            let newTodo = [...todo];
            if(index===0){
                return;
            }
            let prevItem = todo[index-1];
            newTodo.splice(index-1, 1, value);
            newTodo.splice(index, 1, prevItem);
            setTodo(newTodo);
            }}></Button>}
            {(index !== todo.length-1) && <Button
            startIcon ={<ArrowDownwardIcon/>}
            onClick = {(event)=> {
            let newTodo = [...todo];
            if(index===todo.length-1){
                return;
            }
            let nextItem = todo[index+1];
            newTodo.splice(index+1, 1, value);
            newTodo.splice(index, 1, nextItem);
            setTodo(newTodo);
            }}></Button>} 
            </div>
        </li>
            )}
            </Draggable>
        
    )})}
    {provided.placeholder}
    </ol>

}</Droppable>
</DragDropContext>
</div>

</div>

);};

export default Todo;