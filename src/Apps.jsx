import React from 'react'


 

const App = (props)=>{
let x = props.x;
let y = props.y;
let z = props.z;


  if(x===y && y===z)
    return(<>
       <div className ="innermatch"> {x} {y} {z}
      <h3>Its A Match</h3></div></>
    );
  else
   return(<>
    <div className ="innermatch"> {x} {y} {z}
   <h3>Not A Match</h3></div></>
   );  
}

export default App;