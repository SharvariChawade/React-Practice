import { createSlice } from "@reduxjs/toolkit";
import {UsersData} from '../Fakedata'

export const userSlice = createSlice({
    name : 'users',
    initialState : {value : UsersData},
    reducers : {
        addUser : (state,action) => {
            state.value.push(action.payload);
        },
        updateUser : (state,action) =>{
            state.value = state.value.filter((user)=>{
                if(user.id !== action.payload.id){
                    return user;
                }else{
                    user.username =action.payload.username;
                    return user;
                }});
        },
        deleteUser : (state,action) => {
            state.value = state.value.filter((user)=>user.id !== action.payload.id);
        }
    }
})

export const {addUser,deleteUser,updateUser} = userSlice.actions;
export default userSlice.reducer;