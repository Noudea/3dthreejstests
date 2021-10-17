import { useContext, useEffect } from "react"
import TestContext from "../TestContext"

const Test = () => {

    const { test, setTest } = useContext(TestContext)
    const {testbool, setTestbool } = useContext(TestContext)

    useEffect(async ()=> {
        setTest('testdfsq')
        setTestbool('dqsdqs')
        console.log(testbool)
    },[])

    return(<>{test} {testbool}</>)
}

export default Test