import React from 'react'
import TodosApp from "../public/components/TodosApp";
import { connect } from 'react-redux';
import {todosRemainingSelector, todosSelector} from "../public/store/TodoStore/TodoSelectors";
import ViewTask from '../public/components/ViewTask';

export default function Home() {
    const handleAddTodo = () => {
        console.log("add");
    }
    return (<>
        <div>
            <TodosApp/>
        </div>
        
    </>)
}

