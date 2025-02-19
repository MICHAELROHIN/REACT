import { useState } from 'react' // use state is the changing the state
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comp1 from './Comp1.jsx'

function App() { 
  const mydetails = {
    name1: "Michael Rohin",
    age1: 20,
    secId: "SEC23CJ029",
    department: "M.Tech CSE"
  };

  const frienddetails = {
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
        <div>
          <h1 style={{ fontSize: "30px", textAlign: "center", color: "white", fontStyle: "italic" }}>Me</h1>
          <h4 style={{ fontSize: "30px", textAlign: "center", color: "white", fontStyle: "italic"}}>
          <Comp1 name={mydetails.name1} age={mydetails.age1} secId={mydetails.secId} department={mydetails.department} />
          </h4>
          <h1 style={{ fontSize: "30px", textAlign: "center", color: "White", fontStyle: "italic" }}>My Friend</h1>
          <h4 style={{ fontSize: "30px", textAlign: "center", color: "white", fontStyle: "italic"}}>
          <Comp1 name={frienddetails.name2} age={frienddetails.age2} secId={frienddetails.secId2} department={frienddetails.department2} />
          </h4>
        </div>
        
        <button onClick={() => alert("Vanakkam!")}>Click</button>
        <button onDoubleClick={() => alert("I am the king of the Indian Ocean!")}>Double Click Me</button>
      </div>
    </>
  );
}

export default App;
