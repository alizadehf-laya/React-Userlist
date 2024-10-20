import React from 'react'
import User from './User'

const UserItem = (props) => {
  return (
    <div className="card">
      <img
        src={`https://api.adorable.io/avatars/200/${props.img}.png`}
        alt="avatar"
      />
      <h3 data-testid="user-name">{props.name}</h3>
    </div>
  )
}

export default UserItem
