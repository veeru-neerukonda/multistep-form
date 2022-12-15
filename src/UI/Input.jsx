import React from 'react';
import classes from './Input.module.scss';

//* props.input: object - contains all the attributes that need to be set on the input.
//* props.label: string - name of the label associated with the input.
//* props.errorMessage - error message to be displayed (will automatically be shown in red).
//* props.onInputChanged - a function which gets called whenever the text inside this box changes.
function Input(props){
    
    //go into error state if an error message is supplied to you
    let inputAttributes = props.input;
    if(props.errorMessage) {
        inputAttributes = {
            ...inputAttributes,
            error: "true"
        }
    }

    //onInput
    let onInput = function(e){
        props.onInputChanged(e.target.value);
    } 

    return(
        <div className={classes.inputWrapper}>
            <div className={classes.labelWrapper}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <span className={classes.errorMessage}>{props.errorMessage}</span>
            </div>
            <input {...inputAttributes} onInput={onInput} />    
        </div>
    );
}

export default Input;