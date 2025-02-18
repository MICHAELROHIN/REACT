import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comp1 from './Comp1.jsx'

function App() { 
  const myInfo = {
    name1: "Michael Rohin",
    age1: 20,
    secId: "SEC23CJ029",
    department: "M.Tech CSE"
  };

  const himInfo = {
    name2: "MUGILAN",
    age2: 20,
    secId2: "SEC23CJ042",
    department2: "M.Tech CSE"
  };

  return (
    <>
      <div 
        className='container'
        style={{
          backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1400/0*9I-5BaHDOZRMdgD9.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "20px"
        }}
      >
        <h1 style={{ textAlign: "center", color: "darkred" }}>Friends Forever</h1>
        <br />

        <div>
          <h1 style={{ fontSize: "30px", textAlign: "center", color: "white", fontStyle: "italic" }}>Me</h1>
          <p style={{ fontSize: "30px", textAlign: "center", color: "white", fontStyle: "italic"}}>
          <Comp1 name={myInfo.name1} age={myInfo.age1} secId={myInfo.secId} department={myInfo.department} />
          </p>
          
          <h1 style={{ fontSize: "30px", textAlign: "center", color: "White", fontStyle: "italic" }}>My Friend</h1>
          <p style={{ fontSize: "30px", textAlign: "center", color: "white", fontStyle: "italic"}}>
          <Comp1 name={himInfo.name2} age={himInfo.age2} secId={himInfo.secId2} department={himInfo.department2} />
          </p>
        </div>
        
        <button onClick={() => alert("Vanakkam!")}>Click</button>
        <button onDoubleClick={() => alert("I am the king of the Indian Ocean!")}>Double Click Me</button>
      </div>
    </>
  );
}

export default App;
