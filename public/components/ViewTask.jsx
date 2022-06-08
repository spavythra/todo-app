import React, {useState} from 'react';
import {connect} from "react-redux";
import Todos from "./Todos";
import ActionBar from "./Navigation/ActionBar";
import AddBox from "./AddBox";
import {todosSelector} from "../store/TodoStore/TodoSelectors";

const ViewTask = (props) => {
    const {todos, updateTodoAction,setAppFilters, filter, setFilter,index, deleteTodoAction, remaining, updateTasksAction, todosSelector} = props;
    const [currentBox, setCurrentBox] = useState(null)
    const [Categoryfilter, setCategoryfilter] = useState(false)
    const [order,setOrder] = useState('asc')

    const renderList = () => {
        let total_length = todos.length;
        let count = 0;
        let pending_tasks = [];

        todos.map((todo,index) =>{
            todo.tasks.map((task,id) =>{
                if(task.completed == false){
                    console.log("dd")
                    pending_tasks.push(task.name);
                }
            })
        })

        if(pending_tasks.length==0){
            return(
                <div className="todo-container">
                    <p style={{marginLeft:'30px',fontSize:'20px'}}> No pending tasks!</p>
                </div>)
        } else {
            return(
                pending_tasks.map((name,id) =>{
                    
                    return(
                        
                        <div className="todo-container">
                        <ul className="todo-list">
                            <div className="todo" key={id}>
                                    <li className='todo-item'>{name}</li>
                            </div>
                        </ul>
                    </div>
                    ) 
                })
            )
        }  
    }
        

    return (<>
        <div className="content_wrapper">
           {renderList()} 
        </div>
    </>);
}

export default connect(
    (state) => ({
        todos: todosSelector(state)
    }),
    (dispatch) => ({


    })
)(ViewTask)
