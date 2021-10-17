import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Terrain = () => {
    const groundHeight = -50

    const terrain = useRef()

    useFrame(() => {
        terrain.current.position.z += 1
        
    })

    return (
        <mesh
            visible
            position={[0, groundHeight, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            ref={terrain}
        >
            <planeBufferGeometry
                attach="geometry"
                args={[5000, 5000, 128, 128]}
            />
            <meshStandardMaterial
                attach="material"
                color="#fd22a6"
                roughness={1}
                metalness={0}
                wireframe
            />
        </mesh>
    )
}

export default Terrain
