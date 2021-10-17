import React from 'react';
import { useFrame } from '@react-three/fiber'

function MyRotatingBox() {
    const myMesh = React.useRef()

    // useFrame(({ clock }) => {
    //     const a = clock.getElapsedTime()
    //     myMesh.current.rotation.x = a
    // })

    return (
        <mesh rotation={[Math.PI / 2, 0, 0]} ref={myMesh}>
            <cylinderGeometry
                attach="geometry"
                args={[0.1, 0.1, 6, 10, 1]}
            />
            <meshStandardMaterial
                attach="material"
                emissive="yellow"
                wireframe
            />
        </mesh>
    )
}

export default MyRotatingBox
