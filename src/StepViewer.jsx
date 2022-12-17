import React from "react";
import StepOne from './Steps/One';

//* props.stepNumber: int - which step am I displaying 
function StepViewer(props){

    return(
        <>
            <StepOne style={{display: props.stepNumber != 1 ? "none": "block"}} />
            <h1 style={{display: props.stepNumber != 2 ? "none": "block"}}>Step 2</h1>
        </>
    );
}

export default StepViewer;