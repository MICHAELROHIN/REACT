import React from 'react'

const Comp1 = (props) => { 
  return (
    <>
    <div>
      <h3>
        {props.name1}
        {props.age1}
        {props.secId}<br />
        {props.department}

        {props.name2}
        {props.age2}
        {props.secId2}<br />
        {props.department2}
      </h3>
    </div>
    </>
  );
}

export default Comp1;
