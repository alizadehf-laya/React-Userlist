import React from 'react'
import User from './User'

const AverageAge = () => {
  const userA=User.filter((user)=>user.role ==="admin")  
  const userU=User.filter((user)=>user.role ==="user")  

const total=userU.reduce((total,user) =>total +user.age,0);
const totalA=userA.reduce((total,user) =>total +user.age,0);
const average =total /userU.length;
const AverageAge =total /userA.length;
  return (
    <>
      {/* {userA.map(createCardAge)} */}
      <div className="break"></div>
      <div className="card">
    میانگین سن یوزرها:‌ <span data-testid="average-age">{average}</span>
    میانگین سن ادمین ها:‌ <span data-testid="average-age">{AverageAge}</span>
      </div>
    </>
  )
}

export default AverageAge
