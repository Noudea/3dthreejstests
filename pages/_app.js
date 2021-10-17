import '../styles/globals.css'

import { useState } from 'react'
import TestContext from '../TestContext'

function MyApp({ Component, pageProps }) {


    const [test,setTest] = useState('')
    const [testbool, setTestbool] = useState('')

    const context = { test, setTest, testbool, setTestbool }


    return (
        <>
            <TestContext.Provider value= {context}>
                <Component {...pageProps} />
            </TestContext.Provider>
        </>
    )
}

export default MyApp
