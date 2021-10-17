import { useContext, useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import ArWing from '../components/3d/reactfox/ArWing'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Terrain from '../components/3d/reactfox/Terrain'
import Cursor from '../components/3d/reactfox/Cursor'
import { RecoilRoot } from 'recoil'
import Lasers from '../components/3d/reactfox/Lasers'
import LasersController from '../components/3d/reactfox/LasersController'
import Enemies from '../components/3d/reactfox/Enemies'
import GameUpdate from '../components/3d/reactfox/GameUpdate'
import { useTexture } from '@react-three/drei'
import { TextureLoader } from 'three'
import SkyBox from '../components/3d/reactfox/SkyBox'
import Score from '../components/3d/reactfox/Score'
import Text from '../components/3d/reactfox/Text'
import Text2 from '../components/3d/reactfox/Text2'

extend({ OrbitControls })

const Reactfox = () => {

    /**
     * What to render while waiting for loading
     * @returns
     */
    const Loading = () => {
        return (
            <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
                <sphereGeometry attach="geometry" args={[1, 16, 16]} />
                <meshStandardMaterial
                    attach="material"
                    color="white"
                    transparent
                    opacity={0.6}
                    roughness={1}
                    metalness={0}
                />
            </mesh>
        )
    }

    // // camera control
    // const CameraControls = () => {
    //     const {
    //         camera,
    //         gl: { domElement },
    //     } = useThree()

    //     const controls = useRef()
    //     useFrame((state) => controls.current.update())
    //     return (
    //         <orbitControls
    //             ref={controls}
    //             args={[camera, domElement]}
    //             enableZoom={false}
    //             maxAzimuthAngle={Math.PI / 4}
    //             maxPolarAngle={Math.PI}
    //             minAzimuthAngle={-Math.PI / 4}
    //             minPolarAngle={0}
    //         />
    //     )
    // }



    return (
        <div id="canvas">
            <style jsx>{`
                #canvas {
                    width: 100vw;
                    height: 100vh;
                }
            `}</style>
            <Canvas style={{ background: '#171717' }}>
                <RecoilRoot>
                    {/* <CameraControls /> */}
                    <directionalLight intensity={0.8} />
                    <Suspense fallback={<Loading />}>
                        <SkyBox />
                        <ArWing />
                        <Cursor />
                        <Lasers />
                        <Enemies />
                        <Terrain />
                        <LasersController />
                        <GameUpdate />
                        {/* <Text
                            size={10}
                            onPointerOver={() => hover(true)}
                            onPointerOut={() => hover(false)}
                        >
                            4
                        </Text> */}
                        <Score></Score>
                    </Suspense>
                </RecoilRoot>
            </Canvas>
        </div>
    )
}

export default Reactfox
