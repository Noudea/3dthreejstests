import { useLoader } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { scoreState } from './GameState'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { Text } from '@react-three/drei'
import Text2 from './Text2'

const Score = () => {
    
    const mesh = useRef()
    
    const score = useRecoilValue(scoreState)

    const font = useLoader(FontLoader, '/bold.blob')
    
    const config = useMemo(
      () => ({
          font,
          size: 40,
          height: 30,
          curveSegments: 32,
          bevelEnabled: true,
          bevelThickness: 6,
          bevelSize: 2.5,
          bevelOffset: 0,
          bevelSegments: 8,
      }),
      [font]
  )


//   return <Text2 hAlign="center" position={[-12, 6.5, 0]} children={score} />
    
    return (
        <Text
            scale={[10, 10, 10]}
            color="yellow" // default
            anchorX="center" // default
            anchorY='300%' // default
        >
            {score}
        </Text>
    )

    return (
        <mesh ref={mesh} >
            <textGeometry args={['children', config]} />
            <meshNormalMaterial />
        </mesh>
    )



    return <div id="score">
    <style jsx>{`
        
        #score {
            position : fixed;
            top : 0px;
            left : 50%;
            z-index : 1000;

            
        }
        
        `}</style>{score}</div>
}

export default Score
