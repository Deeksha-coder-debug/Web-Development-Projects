let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScoreBoard=document.querySelector('#user-score');
const compScoreBoard=document.querySelector('#comp-score');

const genCompChoice=()=>{
    const options=['rock','paper','scissor'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame=(userChoice)=>{
    console.log("user chose : ",userChoice);
    const compChoice=genCompChoice();
    console.log('computer chose : ',compChoice);

    if(userChoice===compChoice)
    {
        console.log('Game is draw');
        msg.innerText="Game is draw";
        return;  
    }
        
    else if(userChoice==='rock')
        // paper,scissor
        userWin=compChoice==='scissor'?true:false;
    else if(userChoice==='paper')
        //rock,scissor
        userWin=compChoice==='rock'?true:false;
    else
        //rock,paper 
        userWin=compChoice==='paper'?true:false;

    if(userWin){
        console.log("User Wins");
        msg.innerText=`User Wins !! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScoreBoard.innerText=userScore;
    }
    else{
        console.log('Computer wins');
        msg.innerText=`User lose !! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScoreBoard.innerText=compScore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
})});