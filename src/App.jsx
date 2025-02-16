import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() { 
  let name = "Michael Rohin"
  // => arrow function
  
  const mydetails={  //const is the keyword
    name: "Hi, Hello Vanakkam",
    age: 18,
    dept: "M.Tech Computer Science And Engineering",
  }
  
  alert(`${mydetails.name}`)
  console.log(`Age is ${mydetails.age}`)
const michael=()=>{
  console.log("Our department is best");
}

  return ( 
    
    <>
      <h1 style={{textAlign:"center"}}>{mydetails.dept}</h1>  {/*inline style*/} 
      
      {/* <h1 style={rStyle}>Rohin</h1> 
       internal style  */}
      {/* <h1>{mydetails.name}</h1> */}
      {/* <p>my name is {name}</p> */}
      <p className='container'>Name: {mydetails.name}<br/>  {/* external css */}
      
        Age: {mydetails.age}<br/>
        Department: {mydetails.dept}<br/>
      </p>
    <button onClick={App}>Please click me</button>
     <button onClick={michael}>hi, click me</button>
     <button onClick={()=>console.log("Naan dhan da Leo")}>yellarukkum vanakkom</button>
    </>
  )
}

export default App

