import React from 'react';
import classes from './App.module.scss';

import StepOne from './Steps/One';

function App(){
    
    return(
        <div className='container'>
            <div className="col-1">
                {/* steps go here */}
            </div>
            <div className="col-2">
                <div>
                    <h1>Personal Information</h1>
                    <p>Please provide your name, email and phone number.</p>
                </div>
                <StepOne />
                <button onClick={handleFormSubmit}>Next Step</button>
            </div>
        </div>
    );
}

export default App;