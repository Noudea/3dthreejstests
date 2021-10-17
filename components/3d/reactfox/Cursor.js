import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { TextureLoader } from 'three'

const Cursor = () => {
    const rearTarget = useRef()
    const frontTarget = useRef()

    const loader = new TextureLoader()
    const texture = loader.load('crosshair.png')

    useFrame(({ mouse }) => {
        rearTarget.current.position.y = -mouse.y * 10
        rearTarget.current.position.x = -mouse.x * 30

        frontTarget.current.position.y = -mouse.y * 20
        frontTarget.current.position.x = -mouse.x * 60
    })
    // Return a group containing two sprites. One positioned eight units in front of the ship, and the other 16 in front.
    // We give the spriteMaterial a map prop with the loaded sprite texture as a value/
    return (
        <group>
            <sprite position={[0, 0, -8]} ref={rearTarget}>
                <spriteMaterial attach="material" map={texture} />
            </sprite>
            <sprite position={[0, 0, -16]} ref={frontTarget}>
                <spriteMaterial attach="material" map={texture} />
            </sprite>
        </group>
    )
}

export default Cursor
