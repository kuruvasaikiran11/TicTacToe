let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

let choice = "O"
let count = 0;
player1.classList.add("fa-beat-fade");

$(".game-box").click(function(){
    // console.log("Clicked")
    
    // checkWinner()

    if(this.innerText === ""){
        this.innerText = choice;
    
        if(choice === "O"){
            this.classList.add("circle");
            player2.classList.add("fa-beat-fade");
            player1.classList.remove("fa-beat-fade");
            choice = "X";
        }else{
            this.classList.add("cross");
            player1.classList.add("fa-beat-fade");
            player2.classList.remove("fa-beat-fade");
            choice = "O";
        }
        this.classList.remove("unoccupied");
        this.classList.add("occupied");
        count++;
        setTimeout(checkWinner, 100);
    }
})

function checkWinner(){
    let choices = document.getElementsByClassName("game-box");
    // console.log(choices[0].innerHTML);
    
    if((choices[0].innerText === "X" && choices[1].innerText === "X" && choices[2].innerText === "X")
    || (choices[3].innerText === "X" && choices[4].innerText === "X" && choices[5].innerText === "X")
    || (choices[6].innerText === "X" && choices[7].innerText === "X" && choices[8].innerText === "X")
    || (choices[0].innerText === "X" && choices[3].innerText === "X" && choices[6].innerText === "X")
    || (choices[1].innerText === "X" && choices[4].innerText === "X" && choices[7].innerText === "X")
    || (choices[2].innerText === "X" && choices[5].innerText === "X" && choices[8].innerText === "X")
    || (choices[0].innerText === "X" && choices[4].innerText === "X" && choices[8].innerText === "X")
    || (choices[2].innerText === "X" && choices[4].innerText === "X" && choices[6].innerText === "X")){
        alert("Player 2 is the winner");
        location.reload();
    }else if((choices[0].innerText === "O" && choices[1].innerText === "O" && choices[2].innerText === "O")
    || (choices[3].innerText === "O" && choices[4].innerText === "O" && choices[5].innerText === "O")
    || (choices[6].innerText === "O" && choices[7].innerText === "O" && choices[8].innerText === "O")
    || (choices[0].innerText === "O" && choices[3].innerText === "O" && choices[6].innerText === "O")
    || (choices[1].innerText === "O" && choices[4].innerText === "O" && choices[7].innerText === "O")
    || (choices[2].innerText === "O" && choices[5].innerText === "O" && choices[8].innerText === "O")
    || (choices[0].innerText === "O" && choices[4].innerText === "O" && choices[8].innerText === "O")
    || (choices[2].innerText === "O" && choices[4].innerText === "O" && choices[6].innerText === "0")){
        alert("Player 1 is the Winner");
        location.reload();
    }else if(count === 9){
        alert("Game is Tied...")
        location.reload();
    }
}