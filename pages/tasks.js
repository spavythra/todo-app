import React from 'react'
import TodosApp from "../public/components/TodosApp";
import ViewTask from '../public/components/ViewTask';
import Todos from '../public/components/ViewTask';
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function tasks(props) {
    const {todos} = props;
    const handleShowTodo = () => {
        console.log("add");
    }
    
    return (<>
        <div>
            <h3 style={{marginLeft:'60px',textDecoration:'none',marginBottom:'10px'}}>All Pending Tasks</h3>
            <ViewTask/>
        </div>
        
    </>)

}


