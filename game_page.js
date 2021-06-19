var player1;
var player2;
     player1 = localStorage.getItem("player_1_name");
     player2 = localStorage.getItem("player_2_name");
     document.getElementById("player1_name").innerHTML = player1 + " score; ";
     document.getElementById("player2_name").innerHTML = player2 + " score ";
     document.getElementById("player1_name_output").innerHTML = player1;
     document.getElementById("player2_name_output").innerHTML = player2;