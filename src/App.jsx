import React, { useState } from 'react';
import classes from './App.module.scss';

import StepSelector from './StepSelector';
import StepViewer from './StepViewer';

function App(){

    function ToNextStep(){
        setCount(count+1);
    }

    function ToPreviousStep(){
        setCount(count-1);
    }

    const [count,setCount] = useState(1);
    
    return(
        <div className={classes["center-vertically-on-screen"]}>
            <div className={classes["app-container"]}>
                <div className="col-1">
                    <StepSelector />
                </div>
                <div className="col-2">
                    <div>
                        <h1>Personal Information</h1>
                        <p>Please provide your name, email and phone number.</p>
                    </div>
                    <StepViewer stepNumber={count} />
                    <div className="buttons">
                        <button onClick={ToPreviousStep}>Previous Step</button>
                        <button onClick={ToNextStep}>Next Step</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;