import { useRecoilState, useRecoilValue } from "recoil"
import { MeshBasicMaterial, TextureLoader } from "three"
import { enemyPositionState } from "./GameState"

const Enemies = () => {
    const enemies = useRecoilValue(enemyPositionState)

    const loader = new TextureLoader()
    const texture = loader.load('target.jpg')


    return (
        <group>
            {enemies.map((enemy) => (
                <mesh
                    position={[enemy.x, enemy.y, enemy.z]}
                    key={`${enemy.id}`}
                >
                    <circleGeometry attach="geometry" args={[8, 30]} />
                    <meshBasicMaterial  wireframe color='pink' attach="material"/>
                </mesh>
            ))}
        </group>
    )
}

export default Enemies