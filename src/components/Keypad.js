// Code Keypad Component Here
import React from 'react'

function Keypad() {
    const changeEventHandler = () => {
        console.log('Entering password...')
    }
    return(
    <input type="password" onChange = {changeEventHandler}/>
    )}

export default Keypad