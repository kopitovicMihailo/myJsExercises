(function () {
    let clicked = "X";
    let playerX = 0;
    let playerO = 0;
    let moves = 0;
    document.title = "Game begins"

    document
        .querySelectorAll("#input-container button")
        .forEach(function (button) {
            button.addEventListener("click", function (event) {
                if (event.target.innerText == "") {
                    button.innerText = clicked;
                    changeState();
                }

            })
        });

    function changeState() {
        if (clicked == "X") {
            clicked = "O";
        }
        else {
            clicked = "X";
        }
        document.getElementById("player").innerText = clicked;
        moves += 1;
        winner();
    }

    function winner() {
        if (document.getElementById("1").innerText == "X" && document.getElementById("2").innerText == "X" && document.getElementById("3").innerText == "X" ||
            document.getElementById("4").innerText == "X" && document.getElementById("5").innerText == "X" && document.getElementById("6").innerText == "X" ||
            document.getElementById("7").innerText == "X" && document.getElementById("8").innerText == "X" && document.getElementById("9").innerText == "X" ||
            document.getElementById("2").innerText == "X" && document.getElementById("5").innerText == "X" && document.getElementById("8").innerText == "X" ||
            document.getElementById("1").innerText == "X" && document.getElementById("5").innerText == "X" && document.getElementById("9").innerText == "X" ||
            document.getElementById("3").innerText == "X" && document.getElementById("5").innerText == "X" && document.getElementById("7").innerText == "X" ||
            document.getElementById("1").innerText == "X" && document.getElementById("4").innerText == "X" && document.getElementById("7").innerText == "X" ||
            document.getElementById("3").innerText == "X" && document.getElementById("6").innerText == "X" && document.getElementById("9").innerText == "X") {
            document.title = "Game over, player X wins!";
            playerX += 1;
            document.getElementById("playerX").innerText = playerX;
            clicked = "X";
            resetTable();
            document.getElementById("player").innerText = clicked;
            moves = 0;
        }
        else if (document.getElementById("1").innerText == "O" && document.getElementById("2").innerText == "O" && document.getElementById("3").innerText == "O" ||
            document.getElementById("4").innerText == "O" && document.getElementById("5").innerText == "O" && document.getElementById("6").innerText == "O" ||
            document.getElementById("7").innerText == "O" && document.getElementById("8").innerText == "O" && document.getElementById("9").innerText == "O" ||
            document.getElementById("2").innerText == "O" && document.getElementById("5").innerText == "O" && document.getElementById("8").innerText == "O" ||
            document.getElementById("1").innerText == "O" && document.getElementById("5").innerText == "O" && document.getElementById("9").innerText == "O" ||
            document.getElementById("3").innerText == "O" && document.getElementById("5").innerText == "O" && document.getElementById("7").innerText == "O" ||
            document.getElementById("1").innerText == "O" && document.getElementById("4").innerText == "O" && document.getElementById("7").innerText == "O" ||
            document.getElementById("3").innerText == "O" && document.getElementById("6").innerText == "O" && document.getElementById("9").innerText == "O") {
            document.title = "Game over, player O wins!";
            playerO += 1;
            document.getElementById("playerO").innerText = playerO;
            clicked = "X";
            resetTable();
            document.getElementById("player").innerText = clicked;
            moves = 0;
        }

        else if (moves == 9) {
            resetTable();
            clicked = "X";
            document.title = "No one wins! Play again";
            document.getElementById("player").innerText = clicked;
            moves = 0;
        }

        else { document.title = "Game on" }
    }

    function resetTable() {
        document.getElementById("1").innerText = "";
        document.getElementById("2").innerText = "";
        document.getElementById("3").innerText = "";
        document.getElementById("4").innerText = "";
        document.getElementById("5").innerText = "";
        document.getElementById("6").innerText = "";
        document.getElementById("7").innerText = "";
        document.getElementById("8").innerText = "";
        document.getElementById("9").innerText = "";

    }

})();   