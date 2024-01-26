import React, {useState, useEffect} from 'react';
import TodoInputComponent from '../components/todo-list-component.js/todo-input-component';
import TodoBtnAreaComponent from '../components/todo-list-component.js/todo-btn-area-component';
import TodoListHeaderComponent from '../components/todo-list-component.js/todo-list-header-component';
import TodoListComponent from '../components/todo-list-component.js/todo-list-component';
import { ToastContainer } from 'react-toastify';
import Notify from '../components/noification/notify';
const TodoListPage = () => {
    const [allTodos, setAllTodos] = useState ([]);
    const [newTodoTitle, setNewTodoTitle] = useState ('');
    const [newDescription, setNewDescription] = useState ('');
    const [newTodoPriority, setNewTodoPriority] = useState ('');
    const [newTodoCategory, setNewTodoCategory] = useState ('');
    const [newTodoDeadline, setNewTodoDeadline] = useState ('');
    const [completedTodos, setCompletedTodos] = useState ([]);
    const [isCompletedScreen, setIsCompletedScreen] = useState (false);
    const [flag, setFlag] = useState (false);
  
    const handleAddNewToDo = () => {
  if(newTodoTitle !==''){
      let newToDoObj = {
        title: newTodoTitle,
        description: newDescription,
        priority:newTodoPriority,
        category:newTodoCategory,
        deadline:newTodoDeadline
      };
      let updatedTodoArr = [...allTodos];
      updatedTodoArr.push (newToDoObj);
      setAllTodos (updatedTodoArr);
      localStorage.setItem ('todolist', JSON.stringify (updatedTodoArr));
      setNewDescription ('');
      setNewTodoTitle ('');
      setNewTodoPriority ('');
      setNewTodoCategory ('');
      setNewTodoDeadline ('');
      Notify("Todo add successfully","success")
    }else{
      Notify("Title is required","error")
    }
      
    };
  
    useEffect (() => {
      let savedTodos = JSON.parse (localStorage.getItem ('todolist'));
      let savedCompletedToDos = JSON.parse (
        localStorage.getItem ('completedTodos')
      );
      if (savedTodos) {
        setAllTodos (savedTodos);
      }
  
      if (savedCompletedToDos) {
        setCompletedTodos (savedCompletedToDos);
      }
    }, []);
  
    const handleToDoDelete = (index, calledFromHandleComplete = false) => {
      let reducedTodos = [...allTodos];
      reducedTodos.splice (index,1);
      localStorage.setItem ('todolist', JSON.stringify (reducedTodos));
      setAllTodos (reducedTodos);
      if(!calledFromHandleComplete){
        Notify("Todo deleted","warn")
    }
    };
  
    const handleCompletedTodoDelete = index => {
      let reducedCompletedTodos = [...completedTodos];
      reducedCompletedTodos.splice (index,1);
      localStorage.setItem (
        'completedTodos',
        JSON.stringify (reducedCompletedTodos)
      );
      setCompletedTodos (reducedCompletedTodos);
      Notify("Todo deleted successfully","success")
    };
  
    const handleComplete =  (index) => {
      const date = new Date();
      var dd = date.getDate ();
      var mm = date.getMonth () + 1;
      var yyyy = date.getFullYear ();
      var hh = date.getHours ();
      var minutes = date.getMinutes ();
      var ss = date.getSeconds ();
      var finalDate =
        dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;
      let filteredTodo = {
        ...allTodos[index],
        completedOn: finalDate,
      };
      let updatedCompletedList = [...completedTodos, filteredTodo];
      setCompletedTodos (updatedCompletedList);
      localStorage.setItem (
        'completedTodos',
        JSON.stringify (updatedCompletedList)
      );
      handleToDoDelete (index,true);
      Notify("Todo completed successfully","success")
    };
  return (
    <div className="App">
      <h1>MY TODO LIST</h1>
      <div className="todo-wrapper">
        <TodoInputComponent  
            newTodoTitle={newTodoTitle}
            newDescription={newDescription}
            newTodoPriority={newTodoPriority}
            newTodoCategory={newTodoCategory}
            newTodoDeadline={newTodoDeadline}
            handleAddNewToDo={handleAddNewToDo}
            setNewTodoTitle={setNewTodoTitle}
            setNewDescription={setNewDescription}
            setNewTodoPriority={setNewTodoPriority}
            setNewTodoCategory={setNewTodoCategory}
            setNewTodoDeadline={setNewTodoDeadline}
        />
        
        <TodoBtnAreaComponent  isCompletedScreen={isCompletedScreen} setIsCompletedScreen={setIsCompletedScreen}/>

        <div className="todo-list todo-list-menus">
            <TodoListHeaderComponent />
        </div>

        <TodoListComponent 
            isCompletedScreen={isCompletedScreen}
            allTodos={allTodos}
            completedTodos={completedTodos}
            handleToDoDelete={handleToDoDelete}
            handleComplete={handleComplete}
            handleCompletedTodoDelete={handleCompletedTodoDelete}/>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default TodoListPage