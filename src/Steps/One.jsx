import React, {forwardRef, useImperativeHandle, useState} from "react";
import classes from './One.module.scss';

import Input from '../UI/Input';

function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return char.toLowerCase() !== char.toUpperCase();
}

const One = forwardRef((props,ref) => {
    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [telephoneErrorMessage, setTelephoneErrorMessage] = useState("");

    //get the name email and phone from inputs
    const [nameValue , setNameValue ] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [telephoneValue, setTelephoneValue] = useState("");
    let nameInputChanged = function(newValue){
        setNameValue(newValue);        
    }
    let emailInputChanged = function(newValue){
        setEmailValue(newValue);
    }
    let telephoneInputChnaged = function(newValue){
        setTelephoneValue(newValue);
    }

    useImperativeHandle(ref, ()=>({
        Validate(){
            let failFlag = false;

            //check if name is valid
            if(nameValue.trim() === ""){
                setNameErrorMessage("name field cannot be empty");
                failFlag = true;
            }
            else if(!charIsLetter(nameValue.slice(0,1)))
            {
                setNameErrorMessage("name must start with a letter");
                failFlag = true;
            }
            else{
                setNameErrorMessage("");
            }

            //check if email is valid
            if(emailValue.trim() === ""){
                setEmailErrorMessage("email field cannot be empty");
                failFlag = true;
            }
            else if(!emailValue.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
            {
                setEmailErrorMessage("please enter a valid email");
                failFlag = true;
            }
            else{
                setEmailErrorMessage("");
            }

            //check if phone is valid
            if(telephoneValue.trim() === ""){
                setTelephoneErrorMessage("phone field cannot be empty");
                failFlag = true;
            }
            else if(!telephoneValue.match("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"))
            {
                setTelephoneErrorMessage("please enter a valid phone number");
                failFlag = true;
            }
            else{
                setTelephoneErrorMessage("");
            }

            return failFlag;
        },
    }));

    return(
        <form style={{...props.style}}>
            <Input 
                input={{type: "text", id: "NameInput" , placeholder: "Ferdinand", value: nameValue }} 
                label="Name" 
                errorMessage={nameErrorMessage}
                onInputChanged={nameInputChanged}
            ></Input>
            <Input 
                input={{type: "email",id: "EmailInput", placeholder: "Ferdinand@example.com", value: emailValue }} 
                label="Email"
                errorMessage={emailErrorMessage}
                onInputChanged={emailInputChanged}
            ></Input>
            <Input 
                input={{type: "tel",  id: "PhoneInput", placeholder: "Your telephone number here", value: telephoneValue}} 
                label="Phone"
                errorMessage={telephoneErrorMessage}
                onInputChanged={telephoneInputChnaged}
            ></Input>
        </form>
    );
});

export default One;