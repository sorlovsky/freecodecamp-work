var done = false;
var turn = "x";
var board = [
	["", "", ""],
	["", "", ""],
	["", "", ""]
];

var possibleMoves = ['00', '01', '02', '10', '11', '12', '20', '21', '22']

function hasWon(b, p){
	console.log(b[0][0]);
	if (b[0][0] == p && b[0][1] == p && b[0][2] == p){
		$("#00").css("color", "red");
		$("#01").css("color", "red");
		$("#02").css("color", "red");
		return true;
	}
	else if (b[1][0] == p && b[1][1] == p && b[1][2] == p){
		$("#10").css("color", "red");
		$("#11").css("color", "red");
		$("#12").css("color", "red");
		return true;
	}
	else if (b[2][0] == p && b[2][1] == p && b[2][2] == p){
		$("#20").css("color", "red");
		$("#21").css("color", "red");
		$("#22").css("color", "red");
		return true;
	}
	else if (b[0][0] == p && b[1][0] == p && b[2][0] == p){
		$("#00").css("color", "red");
		$("#10").css("color", "red");
		$("#20").css("color", "red");
		return true;
	}
	else if (b[0][1] == p && b[1][1] == p && b[2][1] == p){
		$("#01").css("color", "red");
		$("#11").css("color", "red");
		$("#21").css("color", "red");
		return true;
	}
	else if (b[0][2] == p && b[1][2] == p && b[2][2] == p){
		$("#02").css("color", "red");
		$("#12").css("color", "red");
		$("#22").css("color", "red");
		return true;
	}
	else if (b[0][0] == p && b[1][1] == p && b[2][2] == p){
		$("#00").css("color", "red");
		$("#11").css("color", "red");
		$("#22").css("color", "red");
		return true;
	}
	else if (b[0][2] == p && b[1][1] == p && b[2][0] == p){
		$("#02").css("color", "red");
		$("#11").css("color", "red");
		$("#20").css("color", "red");
		return true;
	}
	else
		return false;
}

function printBoard(b) {
	for (var i = 0; i < b.length; i++){
		for (var j = 0; j < b[0].length; j ++) {
			if (b[i][j] == ""){
				$("p").append("<div id=" + i.toString() + j.toString() + " class='square'></div>");
			} else {
				$("p").append("<div id=" + i.toString() + j.toString() + " class='square'>"+b[i][j]+"</div>");
			}
		}
		$("p").append("<br>");
	}
}

printBoard(board);

function move(p, x, y) {
	board[x][y] = p;
}

function resetBoard() {
	console.log("hello");
	board = [
		["", "", ""],
		["", "", ""],
		["", "", ""]
	];
	possibleMoves = ['00', '01', '02', '10', '11', '12', '20', '21', '22']

	for (var i = 0; i < possibleMoves.length; i++) {
		$('#'+possibleMoves[i]).html("");
	}
	done = false;
}

$("div").click(function() {
	if (done == false) {
		var current = $("#" + this.id).text();


		if (turn == "x"){
			$("#" + this.id).html("x")
			board[this.id[0]][this.id[1]] = 'x'
			for (var i = 0; i < possibleMoves.length; i++) {
				console.log(possibleMoves);
				if (possibleMoves[i] == this.id){
					possibleMoves.splice(i, 1);
				}
			}

		} else {
			$("#" + this.id).html("y")
			board[this.id[0]][this.id[1]] = 'y'
			turn = "x"
		}

		if (hasWon(board, "x")){
			$("h2").html("x has won");
			done = true;
			$("p").append("<br> <button type='button'>Click Me!</button>");
		}


		var pmove = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
		move("y", pmove[0], pmove[1]);
		$("#" + pmove).html("y")

		for (var i = 0; i < possibleMoves.length; i++) {
			if (possibleMoves[i] == pmove.toString()){
				possibleMoves.splice(i, 1);
			}
		}

		hasWon(board, 'y');

		if (hasWon(board, "y")){
			$("h2").html("y has won");
			done = true;
			$("p").append("<button type='button'>Click Me!</button>");

		}
	}
});
