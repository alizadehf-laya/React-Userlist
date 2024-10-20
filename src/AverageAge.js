import React from 'react'
import User from './User'

const AverageAge = () => {
  const userA=User.filter((user)=>user.role ==="admin")  
const ages=(userA) =>{
  return(<User
    key={User.key}
    age={User.age}
    />
  )
}
const total=ages.reduce(sum);
function sum(accumulator,element){
  return accumulator+element/5
}

  return (
    <>
      {/* {userA.map(createCardAge)} */}
      <div className="break"></div>
      <div className="card">
        میانگین سن ادمین ها:‌ <span data-testid="average-age">{sum}</span>
      </div>
    </>
  )
}

export default AverageAge
