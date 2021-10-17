import { useFrame } from '@react-three/fiber'
import { useRecoilState, useRecoilValue } from 'recoil'
import { laserPositionState } from './GameState'

const Lasers = () => {
    const [lasers, setLaserPositions] = useRecoilState(laserPositionState)



    return (
        <group>
            {lasers.map((laser) => (
                <mesh
                    position={[laser.x, laser.y, laser.z]}
                    key={`${laser.id}`}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <cylinderGeometry
                        attach="geometry"
                        args={[0.1, 0.1, 6, 10, 1]}
                    />
                    <meshStandardMaterial
                        attach="material"
                        emissive="green"
                        
                    />
                </mesh>
            ))}
        </group>
    )
}

export default Lasers
