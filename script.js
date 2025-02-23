const hiddenNum = document.getElementById(`hidden-num`);
const message = document.getElementById(`message`);
const input = document.getElementById(`num-input`)
const scoretext = document.getElementById(`score-text`)




let random = Math.floor(Math.random()*20)

let score = 0;

const rightguess =()=>{return score++,
    hiddenNum.textContent = random,
    message.textContent = `Congratulations! Keep goin!`,
    scoretext.textContent = `Score: ${score}`}

    
document.addEventListener("keydown",(e)=>{
 if(e.key === "Enter"){
  control();  
 }   
})

const control =()=>{
 
 if(input.value> random){
  message.textContent = `It's Lower!`
  hiddenNum.textContent = `?`
  message.classList.remove(`color-change`)  
 }
 else if(input.value < random){
  message.textContent = `It's Higher!`  
  hiddenNum.textContent = `?`  
  message.classList.remove(`color-change`)  
 }
 else if(input.value == random){
     return rightguess(),
     random = Math.floor(Math.random()*20),
     message.classList.add(`color-change`)
   }
if(input.value<0 || input.value>=20){
  message.textContent = `Guess between the range of numbers given!`  
 }
 
    
}
