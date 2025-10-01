import React, {useState} from "react";

function ToDoList(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");
    
    function inputChange(e){
        setNewTask(e.target.value);
    }
    
    function addTask(){
        if(newTask.trim() === "") {
            return;
        }
        setTasks(t => [...t, newTask]); 
        setNewTask("");
    }
    
    function deleteTask(index){
        setTasks(t => t.filter((_, i) => i !== index));
    }
    
    return(
        
        <div className="layout-container"> 
            
            <div className="input-row">
                <input 
                    type="text"
                    placeholder="Enter task....."
                    value={newTask}
                    onChange={inputChange} 
                />
                <button className="add-button" onClick={addTask}>Add ToDo</button>
            </div>
            <div className="task-column">
                <h3>To-Do</h3>
                <ol>
                    {tasks.map((task,index)=>
                    <li key={index}><span className="text">{task}</span>
                    <button className="delete-button"
                    onClick={()=>deleteTask(index)}>Delete</button></li>)}
                </ol>
            </div>
            
            <div className="progress-column">
                <h3>Doing</h3>
            </div>
            
            <div className="completecolumn">
                <h3>Completed Tasks</h3>
            </div>
            
        </div>
    );
}
export default ToDoList;