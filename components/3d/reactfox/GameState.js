import { atom } from 'recoil'


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}


const spawnEnemies = () => {

    const enemies = [];

    for (let index = 0; index < 200; index++) {
        enemies.push({
            id : Math.random(),
            x: getRandomIntInclusive(-50, 50),
            y: getRandomIntInclusive(-30, 30),
            z: getRandomIntInclusive(-50, -4000),
        })
        
    }

    return enemies;
}


export const shipPositionState = atom({
    key: 'shipPosition', // unique ID (with respect to other atoms/selectors)
    default: { position: { x : 0 , y:0 , z: 0}, rotation: {} }, // default value (aka initial value)
})


export const enemyPositionState = atom({
    key: 'enemyPosition', // unique ID (with respect to other atoms/selectors)
    default: spawnEnemies(), // default value (aka initial value)
})

export const laserPositionState = atom({
    key: 'laserPositions', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
})

export const scoreState = atom({
    key: 'score', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
})