import React from 'react'
//header of todo list that contains the address od each todo
const TodoListHeaderComponent = () => {
  return (
    <div className="todo-list-item">
            <div >
                <p style={{color:"skyblue",fontWeight:"bold"}}>Title,Description</p>
            </div>
                <p style={{color:"skyblue",fontWeight:"bold"}}>Category</p>
                <p style={{color:"skyblue",fontWeight:"bold"}}>Priority</p>
                <p style={{color:"skyblue",fontWeight:"bold"}}>Deadline</p>
                <div style={{width:"8%"}}>
    </div>
    </div>
  )
}

export default TodoListHeaderComponent