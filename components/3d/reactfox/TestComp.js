import { useContext, useEffect } from "react"
import TestContext from "../../../TestContext"
import GameContext from "./GameContext"

const TestComp = () => {
    const { test, setTest } = useContext(TestContext)
        const { shipPosition, setShipPosition } = useContext(GameContext)

        useEffect(() => {
            setTest('sdqdq')
            console.log(test)
        }, [])


        return(<>test</>)
}

export default TestComp;