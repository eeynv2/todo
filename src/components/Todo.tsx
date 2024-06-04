import React, { Dispatch, SetStateAction } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { css } from "@emotion/css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ThemeProvider } from "@mui/material";
//import { theme } from "./src/themes/theme";
import { useTheme } from "@mui/material/styles";

interface TodoProp {
  item: string;
  setItem: Dispatch<SetStateAction<string>>;
  todo: string[];
  setTodo: Dispatch<SetStateAction<string[]>>;
}

function Todo({ item, setItem, todo, setTodo }: TodoProp) {
  const theme = useTheme();
  function onDragEnd(result: DropResult) {
    const updatedTodo = Array.from(todo);
    const [draggedItem] = updatedTodo.splice(result.source.index, 1);
    updatedTodo.splice(result.destination!.index, 0, draggedItem);
    setTodo(updatedTodo);
  }

  return (
    <div className="App">
      <div className="TodoButtons">
        <Stack spacing={2} direction="row" className="TextBox">
          <input
            type="text"
            id="item"
            name="item"
            onChange={(event) => {
              setItem(event.target.value);
            }}
          />
          <Button
            startIcon={<AddCircleIcon />}
            variant="outlined"
            color="primary"
            className={css`
              color: blank;
              justify-content: space-around;
              &:hover {
                color: hotpink;
                border-color: hotpink;
              }
            `}
            onClick={(event) => {
              let newTodo = [...todo];
              newTodo.push(item);
              setTodo(newTodo);
            }}
          >
            Add
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            className={css`
              &:hover {
                color: hotpink;
              }
            `}
            onClick={(event) => {
              setTodo([]);
            }}
          >
            Clear
          </Button>
        </Stack>
      </div>
      <div className="TodoBox">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todoList">
            {(provided) => (
              <ol
                style={{ listStyle: "none" }}
                className="todoList"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todo.map((value, index) => {
                  return (
                    <ThemeProvider theme={theme}>
                      <Draggable key={value} draggableId={value} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="ListItems"
                          >
                            {index + 1}. {value}
                            <div className="todoListButtons">
                              <IconButton
                                className={css`
                                  color: hotpink;
                                  &:hover {
                                    background-color: white;
                                  }
                                `}
                                onClick={(event) => {
                                  let newTodo = [...todo];
                                  newTodo.splice(index, 1);
                                  setTodo(newTodo);
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                              <IconButton
                                className={css`
                                  color: hotpink;
                                  &:hover {
                                    background-color: white;
                                  }
                                `}
                                onClick={(event) => {
                                  let newTodo = [...todo];
                                  newTodo.splice(index, 1, item);
                                  setTodo(newTodo);
                                }}
                              >
                                <EditIcon />
                              </IconButton>
                              {index !== 0 && (
                                <Button
                                  startIcon={<ArrowUpwardIcon />}
                                  className={css`
                                    color: hotpink;
                                    padding-right: 0.25px;
                                    padding-left: 0.25px;
                                    justify-content: center;
                                    &:hover {
                                      background-color: white;
                                    }
                                  `}
                                  onClick={(event) => {
                                    let newTodo = [...todo];
                                    if (index === 0) {
                                      return;
                                    }
                                    let prevItem = todo[index - 1];
                                    newTodo.splice(index - 1, 1, value);
                                    newTodo.splice(index, 1, prevItem);
                                    setTodo(newTodo);
                                  }}
                                ></Button>
                              )}
                              {index !== todo.length - 1 && (
                                <Button
                                  startIcon={<ArrowDownwardIcon />}
                                  className={css`
                                    color: ${theme.palette.primary.main};
                                    padding-right: 0.25px;
                                    padding-left: 0.25px;
                                    justify-content: center;
                                    &:hover {
                                      background-color: white;
                                    }
                                  `}
                                  onClick={(event) => {
                                    let newTodo = [...todo];
                                    if (index === todo.length - 1) {
                                      return;
                                    }
                                    let nextItem = todo[index + 1];
                                    newTodo.splice(index + 1, 1, value);
                                    newTodo.splice(index, 1, nextItem);
                                    setTodo(newTodo);
                                  }}
                                ></Button>
                              )}
                            </div>
                          </li>
                        )}
                      </Draggable>
                    </ThemeProvider>
                  );
                })}
                {provided.placeholder}
              </ol>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Todo;
