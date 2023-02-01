var location1 = 2;
var location2 = 4;
var location3 = 7;

var guess; // undefined
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = prompt("Готовы? Тогда стреляйте (введи цифру 0-8):"); // null
	if(guess < 0 || guess > 8){
		alert("Нужно от 0 до 8!");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			hits = hits + 1;
			if(hits == 3){
				isSunk = true;
				alert("Все корабли потоплены!");
			}
		}else{
			alert("МИМО )))");
		}
	}
}
var status = "Вы выстрелили " + guesses + " для того чтобы попавсть по кораблю, " +
 "это показывает уровень вашей точности, как: " + (3/guesses);
 alert(status);
