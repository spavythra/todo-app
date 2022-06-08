import React, { useState } from 'react';
import Popup from './Navigation/Popup';
import {InfoSquare} from "react-iconly";
 
function AddPop() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input
      
      type="button"
      value="View Info"
      style={{padding:"5px 10px",backgroundColor:"white",borderRadius:"8px",border:"none"}}
      onClick={togglePopup}
    />

    {isOpen && <Popup
      content={<div className="app" >
       
      <div className="middle-container">
        <div className="middle-container-div">
        
            <button style={{fontSize:"18px",padding: "6px 16px",textAlign:"center",textDecoration:"none",margin:"4px 2px",backgroundColor: "#5c3eac",borderRadius:"12px",color:"white"}} onClick={togglePopup}>close</button>
            <br/><br/>
        
            <h3>How to-do?</h3><br/>
            Welcome to the MyTo-do application.<br/> MyTo-do app is specifically designed to have a wide range of tasks which can be categorised! <br/> <br/>
            This is the info page. Clicking on "View info" in the home page lands here.<br/> It gives steps to get-to-know the application and the information of the Author.<br/> Clicking on "Close" icon at the top of the page closes the info page to work with the application.<br/> <br/>

            Not sure what to do first? Start here, try these steps to explore the application: <br/><br/>
                <ul className='main'>
                    <li>Step 1: Click on "New category" dialog box to add a title under which you can create new tasks </li>
                    <li>(e.g.)<em>  "Testing tasks", "Production tasks"</em></li><br/>
                  
                    <li>Step 2: Click on "Add task" button to create a new task and a small description about it</li><br/>
                  
                    <li>Step 3: Click on "Add task" to create that task and it is shown under the specified category</li><br/>
                  
                    <li>Step 4: Click on the "Add task" button to create a another task under same category</li><br/>
                    <li><em> (Create three tasks under this category to check through the buttons)</em></li><br/>
                    
                    <li>Step 5: Click on square check box near "Critical" to make that specific category/list of tasks as "Critical" </li><br/>

                    <li>Step 6: Click on the circle near/before the task_name to mark the completion of the tasks (strikenthrough)</li><br/>
                    <li><em>(We can check the local filter for that corresponding category named "category filter")</em></li><br/>
                    <ul className='sub'>
                        <li>a) Clicking on "Completed" shows the completed tasks</li><br/> 
                        <li>b) Clicking on "Pending" shows the remaining task to be completed </li><br/>
                        <li>c) Clicking on "All" shows all the taks which are created</li><br/>
                    </ul>
                  
                    <li>Step 7: Click on "More-Circle" icon (black) in the right side of category window (white) </li><br/>
                    <ul className='sub'>
                        <li>a) Click on "Edit list" to edit the list/cateogry name</li><br/> 
                        <li>b) Click on "Delete completed tasks" to delete the strikenthrough tasks</li><br/>
                        <li>c) Click on "Delete list" to delete the list of tasks under that category</li><br/>
                    </ul>
                  
                    <li>Step 8: To explore more few task under different categories has to be created</li><br/>
                    <li>Step 9: Click on "New category" button to create a new task list and repeat all the steps 1-5 </li><br/>
                    <li>Step 10: Check on the right side of the home page, there are three options "Category", "Tasks", "Delete"</li><br/>
                    
                    <li>Step 11:  Before going to "Category" filter, it is better to explore category checkbox filter (red colour) available in the top of task lists. </li><br/>
                   
                    <li>Step 12:  Clicking on "Critical" check box hides the other tasks. Incase of having more than one critical task list, "Category" filter has to be used to mark them critical. </li><br/>

                    <li>Step 13: "Category" option has three sub-options filter (top right). This works same as "Tasks filter" mentioned in the Step 5</li><br/>
                    <em>(But this Filter option is a global filter for all categories)</em><br/><br/>
                    <ul className='sub'>
                        <li>a) Clicking on "Critical tasks" shows all the tasks from critical categories</li><br/>
                        <li>b) Clicking on "Non-critical tasks" shows all the tasks from non-critical categories</li><br/>
                        <li>c) Clicking on "All tasks" shows all the categories</li><br/>
                        <li>d) Clicking on "Critical" checkbox hides other tasks </li><br/>
                    </ul>
                    <em>(To include more critical tasks, click on "All tasks" and click on the respective task list check box. Now click on the Critical tasks to see only the critical tasks. So "Category" filter & "Critical" checkbox acts as a two way filter)</em><br/><br/>
                    

                    <li>Step 14: "Tasks" option has three sub-options filter. This works same as "category filter" mentioned in the Step 5</li><br/>
                    <em>(But this Filter option is a global filter for all category of tasks)</em><br/><br/>
                    <ul className='sub'>
                        <li>a) Clicking on "View all tasks" shows all the tasks from all categories</li><br/>
                        <li>b) Clicking on "View pending tasks" shows all the incomplete items from all categories</li><br/>
                        <li>c) Clicking on "View completed tasks" shows all the completed tasks alone</li><br/>
                    </ul>

                    <li>Step 15: Clicking on "Delete" deletes all the tasks which are marked completed in all the categories</li><br/>
                    <li>Step 16: There are three navigation bars in the page "Myto-do", "Calendar","Tasklist". Clicking on "Myto-do" on right side navigates to home page.</li><br/>

                    <li>Step 17: Clicking on "Calendar" gives a calendar view of tasks listed by date (not linked yet)</li><br/>

                    <li>Step 18: Clicking on "Tasklist" gives all the pending tasks in all the categories as listed view</li><br/>
                    
                    <li>Step 19: To start from the beginning, manual deletion of all the list is needed.</li><br/>
                    
               </ul>
            <br/><br/>
            

            <h3>Author details:</h3>
            <p>Pavithra Subramaniyam</p>
            <p>2107575</p>
            <p>xgpasu (or) pavithra.subramaniyam@tuni.fi</p><br/>
            
           

        </div>
        </div>      
    
    </div>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default AddPop;