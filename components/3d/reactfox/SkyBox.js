import { useThree } from "@react-three/fiber"
import { TextureLoader } from 'three'

const SkyBox = () => {
    const { scene } = useThree()
    const loader = new TextureLoader()
    const texture = loader.load('background2.jpg')
    // Set the scene background property to the resulting texture.
    scene.background = texture
    return null
}

export default SkyBox