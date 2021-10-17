import {useRef} from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import MyRotatingBox from '../components/3d/MyRotatingBox'
extend({ OrbitControls })
const Default = () => {
    
    const CameraControls = () => {
        // Get a reference to the Three.js Camera, and the canvas html element.
        // We need these to setup the OrbitControls component.
        // https://threejs.org/docs/#examples/en/controls/OrbitControls
        const {
            camera,
            gl: { domElement },
        } = useThree()
        // Ref to the controls, so that we can update them on every frame using useFrame
        const controls = useRef()
        useFrame((state) => controls.current.update())
        return <orbitControls ref={controls} args={[camera, domElement]} />
    }

    return (
        <>
            <style jsx>{`
                #canvas-container {
                    width: 500px;
                    height: 500px;
                }
            `}</style>
            <div id="canvas-container">
                <Canvas>
                    <CameraControls />
                    <MyRotatingBox />
                    <ambientLight intensity={0.1} />
                    <directionalLight />
                </Canvas>
            </div>
        </>
    )
}

export default Default;
