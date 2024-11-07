import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/Users';
import { useState } from 'react';

function App() {
  
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name,setName] = useState("");
  const [uname,setUname] = useState("");
  const [newuname, setNewuname] = useState("");

  return (
    <div className="App">
      <div className='addUser'>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="Enter Username" onChange={(e)=>setUname(e.target.value)}/>
        <button onClick={()=>{
          dispatch(addUser({
            id:userList[userList.length-1].id+1,
            name,
            username:uname
          }))
        }}>
          Add User
        </button>
      </div>
      <div className='displayUsers'>
        {userList.map((user)=>{
          return (
            <div className='user'>
              <h2>{user.name}</h2>
              <h3>{user.username}</h3>
              <input type="text" placeholder="Enter New Username" onChange={(e)=>setNewuname(e.target.value)}/>
              <button onClick={()=>{
                dispatch(updateUser({id:user.id, username:newuname}))
              }}>Update Username</button>
              <button onClick={()=>{
                dispatch(deleteUser({
                  id:user.id,
                  name:user.name,
                  username:user.username
                }))
              }}>Delete User</button>
            </div>
          );
        })}
        
        
      </div>
    </div>
  );
}

export default App;
