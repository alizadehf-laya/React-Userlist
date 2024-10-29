import React from 'react'
import User from './User'

const AverageAge = () => {
  const userA=User.filter((user)=>user.role ==="admin")  
  const userU=User.filter((user)=>user.role ==="user")  

const total=userU.reduce((total,user) =>total +user.age,0);
const average =total /userU.length;
  return (
    <>
      {/* {userA.map(createCardAge)} */}
      <div className="break"></div>
      <div className="card">
        میانگین سن ادمین ها:‌ <span data-testid="average-age">{average}</span>
      </div>
    </>
  )
}

export default AverageAge
