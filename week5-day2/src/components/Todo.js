import { Ls } from "dayjs";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoAtom } from "../recoil/todoAtom";
import { Form } from "./Form"

let id = 1;
const getId = () => {
    return id++;
}

export const Todo = () => {
  const [inputValue, setInputValue] = useState();
  const [TodoList, setTodoList] = useRecoilState(todoAtom);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
     setTodoList(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(TodoList));
  }, [TodoList]);



  const addTodoItem = (value) => {
    if (inputValue) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          date: value,
          isComplete: false
        }
      ]);
      setInputValue("");
    }
  }

  return (
    <>
      <Form addTodoItem={addTodoItem} setInputValue={setInputValue}/>
    </>
  );
};
