 
 const bird = document.querySelector(".bird")
 const ground = document.querySelector(".ground")
 const gameDisplay = document.querySelector(".game-container")

 let birdLeft = 500
 let birdBottom = 100
 let gravity = 2
 let isGameOver = false

 function startGame(){
    birdBottom -= gravity
    bird.style.bottom = birdBottom + "px"
    bird.style.left = birdLeft + "px"
 }
 let timeDown = setInterval(startGame ,30)



 function jump(){
     if(birdBottom < 410 )birdBottom += 40                      //return birdplace + 40px
     bird.style.bottom = birdBottom + "px"  
     console.log(birdBottom)
 }
function spacejump(space){
    if(space.keyCode == 32){
        jump()
    }
}
document.addEventListener('keyup', spacejump)


function createObstacle(){
    let obstacleLeft = 1450
    let randomHeight = Math.random() * 100
    let obstacleBottom = randomHeight
    const obstacle = document.createElement('div')
    if(!isGameOver) obstacle.classList.add('obstacle') //if is false than we add a class to obsatcle
    gameDisplay.appendChild(obstacle)         
    obstacle.style.left = obstacleLeft + 'px'
    obstacle.style.bottom = obstacleBottom + 'px'

    function moveObstacle(){
        obstacleLeft -=2
        obstacle.style.left = obstacleLeft + 'px'    

        if (obstacleLeft === -60){
            clearInterval(timeLeft)        
            gameDisplay.removeChild(obstacle)
        }
        if ( obstacleLeft > 600 && obstacleLeft < 603 && birdLeft === 500 && birdBottom < obstacleBottom + 130||
            birdBottom === 0){

            gameOver()
            clearInterval(timeLeft) // stop moving the obstacle
        }
    }
    let timeLeft = setInterval(moveObstacle, 20)

    if (!isGameOver) setTimeout(createObstacle, 3000)      // create a new obstacle
                                                           // if isGameOver is False than we can create new obstacles
    

    function gameOver(){
        clearInterval(timeDown)
        alert("Game Over")
        isGameOver = true
        document.removeEventListener('keyup', spacejump)
    }
}
function createUpperObstacle(){
    let obstacleLeft = 1450
    let randomHeight = 500  + Math.random() * 100
    let obstacleBottom = randomHeight
    const obstacle = document.createElement('div')
    if(!isGameOver) obstacle.classList.add('obstacle') //if is false than we add a class to obsatcle
    gameDisplay.appendChild(obstacle)         
    obstacle.style.left = obstacleLeft + 'px'
    obstacle.style.bottom = obstacleBottom + 'px'

    function moveObstacle(){
        obstacleLeft -=2
        obstacle.style.left = obstacleLeft + 'px'    

        if (obstacleLeft === -60){
            clearInterval(timeLeft)        
            gameDisplay.removeChild(obstacle)
        }
        if ( obstacleLeft > 600 && obstacleLeft < 603 && birdLeft === 500 && birdBottom < obstacleBottom + 130||
            birdBottom === 0){

            gameOver()
            clearInterval(timeLeft) // stop moving the obstacle
        }
    }
    let timeLeft = setInterval(moveObstacle, 20)

    if (!isGameOver) setTimeout(createUpperObstacle, 3000)      // create a new obstacle
                                                           // if isGameOver is False than we can create new obstacles
    

    function gameOver(){
        clearInterval(timeDown)
        alert("Game Over")
        isGameOver = true
        document.removeEventListener('keyup', spacejump)
    }
}
createObstacle()
createUpperObstacle()









