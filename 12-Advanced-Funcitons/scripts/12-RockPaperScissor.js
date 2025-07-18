
let score = JSON.parse(localStorage.getItem('score'))  
    if (!score ) {
            score = {
                Win:0,
                Lose:0,
                Tie:0
            }
        }
const resultPage = document.querySelector('.js-FinalResult')

function computerRandom(){
    const randomNum = Math.random()
    let computerChoose = ''

        if (randomNum<1/3 && randomNum>=0) {
            computerChoose = 'rock'
        } else if (randomNum>=1/3 && randomNum<2/3) {
            computerChoose ='paper'
        } else {
            computerChoose ='scissors'
        }
        return computerChoose
}
function rockPaperScissors(yourChoose){
    
    const computerChoose = computerRandom()

    if(yourChoose === computerChoose){
        result = 'Tie'
        score.Tie+=1
    }else if(yourChoose === 'rock' && computerChoose === 'scissors' ||
            yourChoose === 'paper' && computerChoose === 'rock' ||
            yourChoose === 'scissors' && computerChoose === 'paper'
    ){
        result = 'Win'
        score.Win+=1
    }else {
        result = 'Lose'
        score.Lose+=1
    }

    localStorage.setItem('score',JSON.stringify(score))

    resultPage.innerHTML = `You <img src="Image/${yourChoose}-emoji.png" class="icon"> - Computer <img src="Image/${computerChoose}-emoji.png" class="icon"><br> 
    ${result} <br>
    Win: ${score.Win} - Lose: ${score.Lose} - Tie: ${score.Tie}`
}

let isAutoPlaying = false
let intervalID

function autoPlay(){
    if(!isAutoPlaying){
        intervalID =setInterval(function(){
            const playerMove = computerRandom();
            rockPaperScissors(playerMove)
        },1000)
        isAutoPlaying = true
    }else{
        clearInterval(intervalID);
        isAutoPlaying = false
    }
}



resultPage.innerHTML =`Win: ${score.Win} - Lose: ${score.Lose} - Tie: ${score.Tie}`