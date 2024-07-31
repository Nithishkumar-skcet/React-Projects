import React from 'react';
const Mystyle={
    backgroundColor:'lightblue',
    color:'darkblue',
    padding:'10px',
    border:'1px solid blue',
    borderRadius:'5px'

}
const Inlinestyle=()=>{
    return(
        <div style={Mystyle}>
            <h1 style={{color:'green'}}>Inline Style in JSX Example</h1>
            <p style={{color:'darkblue',fontSize:'16px',}}>This is a paragraph with inlinestyles applied</p>

        </div>
    );
};
export default Inlinestyle;