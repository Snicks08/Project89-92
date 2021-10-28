function adduser()
{
    player_1name = document.getElementById("player1div").value;
    player_2name = document.getElementById("player2div").value;
    localStorage.setItem("player1", player_1information);
    localStorage.setItem("player2", player_2information);
    window.location="quiz_game_page.html";
}

function nextpage()
{
    location.href="quiz_game_page.html";
}