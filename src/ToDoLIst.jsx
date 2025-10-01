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
        setTasks(tasks.filter((e,i) => i !== index));

    
    }
    return(<div className="to-do-list">
     <h1>To-Do-List</h1>
     <div>
        <input type="text"
        placeholder="Enter task....."
        value={newTask}
        onChange={inputChange} 
        />
        <button className="add-button" onClick={addTask}>Add ToDo</button>

     </div>
     <ol>
        {tasks.map((task,index)=>
        <li key={index}><span className="text">{task}</span>
        <button className="delete-button"
        onClick={()=>deleteTask(index)}>Delete</button></li>)}
     </ol>
    </div>)
}
export default ToDoList;