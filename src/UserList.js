import React from 'react'
import UserItem from './UserItem'
import User from './User'
import AverageAge from './AverageAge'
//comment
const UserList = () => {
   const users=User.filter((user)=>user.role ==="user")
   const createCard=(users)=>{
      return <UserItem  key={users.key} name={users.name} img={users.img} age={users.age}/>
   }
   return(<div>
      {users.map(createCard)}
      <AverageAge/>

   </div>)
}

export default UserList
