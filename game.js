let buttonColors = [ "green", "red", "yellow", "blue"];
let gamePattern = [];
let userClikcedPattern = [];
$(document).keypress(function(event){
    if(event.key === "a"){
        start_game();
    }

});
$(".btn").click(function(){
    let userclcikedButton = $(this).attr("id");
    userClikcedPattern.push(userclcikedButton);
    check_answer();
})
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            let green = new Audio("sounds/green.mp3");
            green.play();
            gamePattern.push("green");
            $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            break;
        case 1:
            let red = new Audio("sounds/red.mp3");
            red.play();
            gamePattern.push("red");
            $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            break;
        case 2:
            let yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            gamePattern.push("yellow");
            $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            break;
        case 3:
            let blue = new Audio("sounds/blue.mp3");
            blue.play();
            gamePattern.push("blue");
            $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            break;
    }
}
function check_answer(){
    let last_index = userClikcedPattern.length-1;
    if(userClikcedPattern[last_index] === gamePattern[last_index]){
        if(userClikcedPattern.length === gamePattern.length){
            userClikcedPattern = [];
            setTimeout(function(){nextSequence();}, 1000);
        }
    }
    else{
        $("h1").text("Game Over, Press A Key to Restart");
        let Wrong = new Audio("sounds/wrong.mp3");
        Wrong.play();
        gamePattern = [];
        userClikcedPattern = [];

    }
}
function start_game(){
    nextSequence();
}