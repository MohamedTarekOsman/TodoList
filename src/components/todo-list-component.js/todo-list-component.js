import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
//render todo for todo page and completed page
const TodoListComponent = ({ isCompletedScreen, allTodos, completedTodos, handleToDoDelete, handleComplete, handleCompletedTodoDelete }) => {
  return (
    <div className="todo-list todo-list-content">
          {isCompletedScreen === false &&
            allTodos.map ((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3 className='todo-list-item-content'>{item.title}</h3>
                  <p className='todo-list-item-content'>{item.description?item.description:"-"}</p>
                  
                </div>
                  <p className='todo-list-item-content'>{item.category?item.category:"-"}</p>
                  <p>{item.priority?item.priority:"Moderate"}</p>
                  <p>{item.deadline?item.deadline:"-"}</p>
                
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleToDoDelete (index)}
                  />
                  <BsCheckLg
                    title="Completed?"
                    className=" check-icon"
                    onClick={() => handleComplete (index)}
                  />
                </div>
              </div>
            ))}

          {isCompletedScreen === true &&
            completedTodos.map ((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3 className='todo-list-item-content' >{item.title}</h3>
                  <p className='todo-list-item-content' >{item.description?item.description:"-"}</p>
                  <p className='todo-list-item-content' style={{color:"skyblue"}}> <i>Completed at: {item.completedOn}</i></p>
                </div>
                  <p className='todo-list-item-content'>{item.category?item.category:"-"}</p>
                  <p>{item.priority?item.priority:"Moderate"}</p>
                  <p>{item.deadline?item.deadline:"-"}</p>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleCompletedTodoDelete (index)}
                  />
                </div>
              </div>
            ))}
    </div>
  )
}

export default TodoListComponent