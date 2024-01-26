import React from 'react'
// todo page and completed todo page
const TodoBtnAreaComponent = ({ isCompletedScreen, setIsCompletedScreen }) => {
  return (
    <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen (false)}
          >
            ToDo
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen (true)}
          >
            Completed
          </button>
    </div>
  )
}

export default TodoBtnAreaComponent