import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashboard = (props) => {


    
    return (
        <div className='p-10 bg-[#1a1a1a] h-screen'>

        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
        </div>
)
}

export default EmployeeDashboard
