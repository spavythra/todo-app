import React, {useRef} from 'react';
import TextEditable from "./TextEditable";
import {CloseSquare, Delete, Edit, MoreCircle} from "react-iconly";
import {connect} from "react-redux";
import {todosTitleSelector, filterCategorySelector} from "../store/TodoStore/TodoSelectors";
import {deleteBoxAction, deleteCompleted, updateTodoTitle,toggleCategoryAction,filterCategoryAction} from "../store/TodoStore/TodoActions";
import clsx from "clsx";
import DropDown from "./Common/DropDown";
import {useEditing, useOpen} from "../Hooks/hook";

import {Checkbox, Tooltip} from "@nextui-org/react";
import {todosSelector} from "../store/TodoStore/TodoSelectors"


function TaskHeader(props) {
    const {count, index, idx, title, todos, updateTitle, toggleCategory, filterCategoryAction, critical, deleteCompleted, deleteBoxAction, toggleCategoryAction} = props;
    const {isEditing, setIsEditing} = useEditing();
    const {open, setOpen} = useOpen();
    const tododef = todos[index];

    /* Dropdown Props */
    const buttonRef = useRef()
    const marginPos = 120;
    const top = 35;
    const menuList = [
        {
            name: 'Edit list',
            icon: <Edit set="curved"/>,
            onClick: () => setIsEditing(true)
        },
        {
            name: 'Delete completed tasks',
            icon: <CloseSquare set="curved"/>,
            onClick: () => deleteCompleted(index)
        },
        {
            name: 'Delete list',
            icon: <Delete set="curved"/>,
            onClick: () => deleteBoxAction(index)
        }
    ]

    return (<>
        <header className={clsx("box_header", isEditing ? 'active' : null)}>
            <div className="box_header--info">
                <TextEditable content={title(index)}
                              setStore={updateTitle}
                              isFocus={isEditing}
                              index={index}
                              setParent={setIsEditing}/>
                {!isEditing && <p className="task_count">{count}</p>}


                    
            </div>
            {!isEditing && <div className="box_header--action">
            <Checkbox color="error" className={'category_checkbox'} checked={tododef.critical}
                            onChange={() => {toggleCategoryAction({tododef, idx: index})
                            {{filterCategoryAction(tododef.critical)}} }}>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: -4,fontSize: '14px',fontWeight: 'bold',color: 'red'}}>
                            <p className="category_name">Critical</p>
                        </div>
                    </Checkbox>
                <button className="btn box_header--button icon-button" ref={buttonRef}
                        style={open ? {pointerEvents: 'none'} : null}
                        onClick={() => setOpen(true)}>
                    <MoreCircle set="bold" size={20}/>
                </button>
                
            </div>}
        </header>
        {!isEditing && <DropDown menuList={menuList} marginPos={marginPos} top={top} open={open} setOpen={setOpen}
                   buttonRef={buttonRef}/>}
    </>);
}

export default connect(
    (state) => ({
        title: (index) => todosTitleSelector(state, index),
        critical: (index) => filterCategorySelector(state, index),
        todos: todosSelector(state)
    }),
    (dispatch) => ({
        updateTitle: state => dispatch(updateTodoTitle(state)),
        deleteCompleted: state => dispatch(deleteCompleted(state)),
        deleteBoxAction: state => dispatch(deleteBoxAction(state)),
        toggleCategoryAction: state => dispatch(toggleCategoryAction(state)),
        filterCategoryAction: state => dispatch(filterCategoryAction(state))

    })
)(TaskHeader)
