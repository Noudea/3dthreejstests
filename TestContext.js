import React from 'react'

const TestContext = React.createContext({
    test : '',
    setTest : () => {},
    testbool : '',
    setTestbool : () => {}
})

export default TestContext
