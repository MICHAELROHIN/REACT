import React from 'react'

const Comp1 = (props) => { 
  return (
    <>
    <div>
      <h3>
        {props.name1}<br />
        {props.age1}<br />
        {props.secId}<br />
        {props.department}
      </h3>
      <h3>
        {props.name2}<br />
        {props.age2}<br />
        {props.secId2}<br />
        {props.department2}
      </h3>
    </div>
    </>
  );
}

export default Comp1;
