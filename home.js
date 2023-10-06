var CPU_Score = 0;
var User_Score = 0;
var CPU_Option;

//CPU_Option if equals 1 then rock, if equals 2 then paper, if equals 3 then scissors
let iteration = 0;
function scoreCalc(x)
{
    let outcome;
    iteration += 1; 
    CPU_Option = Math.floor(Math.random()*3+1);
    if(CPU_Option === 1)
    {
        CPU_Option = "rock"
    }
    else if(CPU_Option === 2)
    {
        CPU_Option = "paper"
    }
    else if(CPU_Option === 3)
    {
        CPU_Option = "scissors"
    }
    
    if(x == "rock" && CPU_Option == "rock") //tie
    {
        CPU_Score += 0;
        User_Score += 0;
        outcome = "Tie";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
    else if(x == "rock" && CPU_Option == "paper") //cpu wins
    {
        CPU_Score += 1;
        User_Score += 0;
        outcome = "Computer Won";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
    else if(x == "rock" && CPU_Option == "scissors") // user wins
    {
        CPU_Score += 0;
        User_Score += 1;
        outcome = "You Won";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
    else if(x == "paper" && CPU_Option == "paper")// tie
    {
        CPU_Score += 0;
        User_Score += 0;
        outcome = "Tie";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
    else if(x == "paper" && CPU_Option == "scissors") //cpu
    {
        CPU_Score += 1;
        User_Score += 0;
        outcome = "Computer Won";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
    else if(x == "paper" && CPU_Option == "rock") // user
    {
        CPU_Score += 0;
        User_Score += 1;
        outcome = "You Won";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
    else if(x == "scissors" && CPU_Option == "paper") // user
    {
        CPU_Score += 0;
        User_Score += 1;
        outcome = "You Won";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
    else if(x == "scissors" && CPU_Option == "scissors") // tie
    {
        CPU_Score += 0;
        User_Score += 0;
        outcome = "Tie";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
    else if(x == "scissors" && CPU_Option == "rock") // cpu
    {   
        CPU_Score += 1;
        User_Score += 0;
        outcome = "Computer Won";
        document.getElementById("p1").innerText = "Computer: " + CPU_Score;
        document.getElementById("p2").innerText = "Me: " + User_Score;
        let object = document.createElement("p");
        object.innerHTML = `${iteration}. You - ${x}, Computer -${CPU_Option}, Outcome - ${outcome}`;
        document.getElementById("outcomes").appendChild(object);
    }
}