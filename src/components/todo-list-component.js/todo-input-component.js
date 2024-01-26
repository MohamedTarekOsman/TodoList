import React from 'react'
// adding new todo section
const TodoInputComponent = ({
    newTodoTitle,
    newDescription,
    newTodoPriority,
    newTodoCategory,
    newTodoDeadline,
    handleAddNewToDo,
    setNewTodoTitle,
    setNewDescription,
    setNewTodoPriority,
    setNewTodoCategory,
    setNewTodoDeadline,
  }) => {
  return (
    <div className="todo-input">
          <div className='todo-input-item-container'>
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              value={newTodoTitle}
              onChange={e => setNewTodoTitle (e.target.value)}
              placeholder="What's the title of your To Do?"
            />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              value={newDescription}
              onChange={e => setNewDescription (e.target.value)}
              placeholder="What's the description of your To Do?"
            />
          </div>
          <div className="todo-input-item">
            <label>Priority:</label>
            <select 
            value={newTodoPriority}
            onChange={e => setNewTodoPriority(e.target.value)}
            >
                <option value="moderate">Moderate</option>
                <option value="high priority">High Priority</option>
                <option value="low priority">Low Priority</option>
            </select>
          </div>
          </div>

          <div className='todo-input-item-container'>
          <div className="todo-input-item">
            <label>Category:</label>
            <input
              type="text"
              value={newTodoCategory}
              onChange={e => setNewTodoCategory(e.target.value)}
              placeholder="What's the category of your To Do?"
            />
          </div>
          <div className="todo-input-item">
            <label>Deadline:</label>
            <input
              type="date"
              value={newTodoDeadline}
              onChange={e => setNewTodoDeadline (e.target.value)}
              placeholder="What's the description of your To Do?"
            />
          </div>
          </div>

          <div className="todo-input-item">
            <button
              className="primary-btn"
              type="button"
              onClick={handleAddNewToDo}
            >
              Add
            </button>
          </div>
        </div>
  )
}

export default TodoInputComponent