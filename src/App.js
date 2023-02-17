import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)  //both variables 
    window.changeCounter = changeCounter     //test it in the browser console by running changeCounter(2)
    return (
        <div>
            <h1>{counter}</h1>
            <h4>{counter}</h4>
        </div>
    )
}

export default App;
