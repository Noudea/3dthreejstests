import { useRecoilState, useRecoilValue } from 'recoil'
import { laserPositionState, shipPositionState } from './GameState'

const LasersController = () => {
    const shipPosition = useRecoilValue(shipPositionState)
    const [lasers, setLasers] = useRecoilState(laserPositionState)
    return (
        <mesh
            position={[0, 0, -8]}
            onClick={() => {
                setLasers([
                    ...lasers,
                    {
                        id: Math.random(),
                        x: 0,
                        y: 0,
                        z: 0,
                        velocity: [
                            shipPosition.rotation.x * 30,
                            shipPosition.rotation.y * 25,
                        ],
                    },
                ])
            }}
        >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial
                attach="material"
                color="orange"
                emissive="#ff0860"
                visible={false}
            />
        </mesh>
    )
}

export default LasersController
