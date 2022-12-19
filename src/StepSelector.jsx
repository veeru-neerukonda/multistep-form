import React from 'react';
import classes from './StepSelector.module.scss';

//* props.stepNumber: int - the step number
//* props.stepDescription: string - describe the step
function StepSelectionPart(props){
    return(
        <div className={classes["step-selector-part"]}>
            <h1 className={classes["step-selector-part__number"]}>{props.stepNumber}</h1>
            <div className={classes["step-selector-part__text-box"]}>
                <h2 className={classes["step-selector-part__name-text"]}>Step {props.stepNumber}</h2>
                <h1 className={classes["step-selector-part__step-description"]}>{props.stepDescription}</h1>
            </div>
        </div>
    );
}

function StepSelector(props){
    return(
        <div className={classes.stepSelector}>
            <StepSelectionPart stepNumber={1} stepDescription={"Your Info"}/>
            <StepSelectionPart stepNumber={2} stepDescription={"Select Plan"}/>
            <StepSelectionPart stepNumber={3} stepDescription={"Add-Ons"}/>
            <StepSelectionPart stepNumber={4} stepDescription={"Summary"}/>   
        </div>
    );
}

export default StepSelector;