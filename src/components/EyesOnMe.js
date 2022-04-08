// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    const focusEventHandler = () => {
        console.log('Good!')
    }

    const blurEventHandler = () => {
        console.log('Hey! Eyes on me!')
    }
    return (<button onFocus={focusEventHandler} onBlur={blurEventHandler}>Eyes on me</button>)
}

export default EyesOnMe