var done = false
var turn = "x";
var board = [
	["", "", ""],
	["", "", ""],
	["", "", ""]
];

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
	console.log("hello");
}

printBoard(board);

function move(p, x, y) {
	board[x][y] = p;
}

$("div").click(function() {
    // alert(this.id); // or alert($(this).attr('id'));
	if (done == false) {
		var current = $("#" + this.id).text();

		if (turn == "x"){
			$("#" + this.id).html("x")
			board[this.id[0]][this.id[1]] = 'x'

			turn = "y"
		} else {
			$("#" + this.id).html("y")
			board[this.id[0]][this.id[1]] = 'y'
			turn = "x"
		}
		if (hasWon(board, "x")){
			$("h2").html("x has won");
			done = true;
		}

		else if (hasWon(board, "y")){
			$("h2").html("y has won");
			done = true;
		}
	}

});
