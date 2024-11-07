const Task = (props) => {
    return (
    <div className='task'>
        {!props.completed ? <h2 className='taskTitle'>{props.taskName}</h2> : <h2 className='taskTitle'><strike>{props.taskName}</strike></h2>}
        <button className='addButton' onClick = {() => props.deleteTask(props.id)}>X</button>
        {props.completed === false && <button className='comButton' onClick = {() => props.updateTask(props.id)}>Complete</button>}
    </div>
)};

export default Task