import { useFrame } from '@react-three/fiber'
import { useRecoilState } from 'recoil'
import { enemyPositionState, laserPositionState, scoreState } from './GameState'

const GameUpdate = () => {
    const [enemies, setEnemies] = useRecoilState(enemyPositionState)
    const [lasers, setLaserPositions] = useRecoilState(laserPositionState)
    const [score, setScore] = useRecoilState(scoreState)

    // A helper function to calculate the distance between two points in 3d space.
    // Used to detect lasers intersecting with enemies.
    function distance(p1, p2) {
        const a = p2.x - p1.x
        const b = p2.y - p1.y
        const c = p2.z - p1.z

        return Math.sqrt(a * a + b * b + c * c)
    }

    useFrame(() => {
        
           const hitEnemies = enemies
               ? enemies.map(
                     (enemy) =>
                         lasers.filter(
                             (laser) =>
                                 lasers.filter(
                                     (laser) => distance(laser, enemy) < 6
                                 ).length > 0
                         ).length > 0
                 )
               : []

           if (hitEnemies.includes(true) && enemies.length > 0) {
               console.log('hit detected')
                setScore(score + hitEnemies.filter((hit) => hit).length)
                console.log(score)
           }
    

        setLaserPositions(
            lasers
                .map((laser) => ({
                    id: laser.id,
                    x: laser.x + laser.velocity[0],
                    y: laser.y + laser.velocity[1],
                    z: laser.z - 5,
                    velocity: laser.velocity,
                }))
                .filter((laser) => laser.z > -100 && laser.y > -50)
        )

        setEnemies(
            enemies
                .map((enemy) => ({
                    id : enemy.id,
                    x: enemy.x,
                    y: enemy.y,
                    z: enemy.z + 1,
                }))
                .filter((enemy, idx) => !hitEnemies[idx] && enemy.z < 0)
        )
    })

    return null
}

export default GameUpdate
