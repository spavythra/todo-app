import React, {useEffect, useState} from 'react';
import {Plus} from "react-iconly";
import {Button} from "@nextui-org/react";
import AddForm from "./Forms/AddForm";
import clsx from "clsx";
import {connect} from "react-redux";
import {todosSelector} from "../store/TodoStore/TodoSelectors";
import {addBoxAction} from "../store/TodoStore/TodoActions";
import {useBox} from "../Hooks/hook";
import AddPop from './AddPop';

let number = 0;

function AddBox(props) {
    const {isEditing, setIsEditing, value, setValue, handleClose} = useBox()

    const {addBoxAction}= props;

    const handleSave = () => {
        setIsEditing(false)
        addBoxAction({title: value,id: number+1, filter: null, tasks: [], categoryfilter: null, critical: false})
        number++;
        setValue('')
    }

    return (<>
    <div>
        <div className={clsx("add-box", isEditing ? 'active' :  null)}>
            {!isEditing && <Button  type="button" onClick={() => setIsEditing(true)}
                                   className="add_box--button" aria-label="Sorting options menu" color="#282828" auto>
                <Plus set="curved" style={{marginRight: 12}}/>
                <span>New category</span>
            </Button>}
            {isEditing &&
            <AddForm value={value} setValue={setValue} handleClose={handleClose} handleSave={handleSave} placeholder={'Add a title'}/>}
            </div>

                <AddPop/>
                
        </div>
    </>);
}

export default connect(
    (state) => ({
        state: (index) => todosSelector(state)
    }),
    (dispatch) => ({
        addBoxAction: state => dispatch(addBoxAction(state))
    })
)(AddBox)

