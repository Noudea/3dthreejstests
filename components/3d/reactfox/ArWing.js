import {  useEffect, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRecoilState } from 'recoil'
import { shipPositionState } from './GameState'

const ArWing = () => {
    const ship = useRef()
    const { nodes } = useLoader(GLTFLoader, 'models/arwing.glb')

    const [shipPosition, setShipPosition] = useRecoilState(shipPositionState)

    // const [shipPosition, setShipPosition] = useState({
    //     position: { x: 0, y: 0 },
    //     rotation: {
    //         z: 0,
    //         x: 0,
    //         y: 0,
    //     },
    // })
    const gltf = useLoader(GLTFLoader, 'models/ship.glb')


    useFrame(({ mouse }) => {
        setShipPosition({
            position: { x: mouse.x * 6, y: mouse.y * 2},
            rotation: {
                z: -mouse.x * 2,
                x: -mouse.x * 0.5,
                y: -mouse.y * 0.2,
            },
        })

                ship.current.rotation.z = shipPosition.rotation.z
                ship.current.rotation.y = shipPosition.rotation.x
                ship.current.rotation.x = shipPosition.rotation.y
                ship.current.position.y = shipPosition.position.y
                ship.current.position.x = shipPosition.position.x


    })

    // return <primitive ref={ship} object={gltf.scene} position={[0, 0, 0]} />

    //   useFrame(() => {
    //       group.current.rotation.y += 0.004
    //       group.current.rotation.x += 0.004
    //   })

    return (
        <group ref={ship}>
            <mesh visible geometry={nodes.Default.geometry}>
                <meshStandardMaterial
                    attach="material"
                    color="white"
                    roughness={0.3}
                    metalness={0.8}
                />
            </mesh>
        </group>
    )
}

export default ArWing
