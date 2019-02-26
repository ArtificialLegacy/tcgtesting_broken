function setup() {
	createCanvas(500, 500);
	background(0);
	fill(100);
	textSize(12);
	rect(0, 0, 500, 500);
	let menu = 0
	menu0();
}

function draw() {
	if (turn === 2) {
		if (runAI === 0) {
			playAI();
		} else {
			runAI--
		}
	}
}

let isTrue = "false"
let placeVar = 0
let randCard = 0
let card1 = "none"
let card2 = "none"
let card3 = "none"
let card4 = "none"
let card5 = "none"
let currCard = 0
let loadedCard = "None"
let runAI = 0
let turn = 3
let loadCard = "none"
let loadMana = 0
let mana1 = 0
let mana2 = 0
let mana3 = 0
let mana4 = 0
let mana5 = 0
let playMana = 0

function mouseClicked() {
	if (menu === 0) {
		between(mouseX, mouseY, 10, 10, 50, 50);
		if (isTrue === "true") {
			menu2();
			menu = 2
		}
		between(mouseX, mouseY, 10, 70, 60, 120);
		if (isTrue === "true") {
			menu1();
			menu = 1
		}
		between(mouseX, mouseY, 10, 130, 70, 190);
		if (isTrue === "true") {
			menu4();
			menu = 4
		}
	} else {
		if (menu === 1) {
			between(mouseX, mouseY, 440, 440, 490, 490);
			if (isTrue === "true") {
				menu0();
				menu = 0
			}
		} else {
			if (menu === 2) {
				between(mouseX, mouseY, 200, 325, 300, 375);
				if (isTrue === "true") {
					menu0();
					menu = 0
				}
				between(mouseX, mouseY, 200, 200, 300, 300);
				if (isTrue === "true") {
					turn = 1
					menu3();
					menu = 3
				}
			} else {
				if (menu === 3) {
					between(mouseX, mouseY, 440, 10, 490, 60);
					if (isTrue === "true") {
						turn = 3
						menu0();
						menu = 0
					}
					if (turn === 1) {
						between(mouseX, mouseY, 0, 400, 100, 500);
						if (isTrue === "true") {
							if (playMana >= mana1) {
								playMana = playMana - mana1
								loadedCard = card1
								fill(100);
								rect(0, 400, 100, 100);
								rect(185, 150, 100, 100);
								fill(0);
								text("Current Card -", 200, 180);
								textSize(8);
								text(loadedCard, 193, 200);
								textSize(12);
								text("AI's Turn", 193, 225);
								manaCheck();
								manaText = "Mana = " + playMana
								text(manaText, 193, 240);
								runAI = floor(random(300, 600));
								newCard();
								turn = 2
								mana1 = loadMana
								card1 = loadCard
								textSize(8);
								text(card1, 5, 450);
								text(12);
							}
						}
						between(mouseX, mouseY, 100, 400, 200, 500);
						if (isTrue === "true") {
							if (playMana >= mana2) {
								playMana = playMana - mana2
								loadedCard = card2
								fill(100);
								rect(100, 400, 100, 100);
								rect(185, 150, 100, 100);
								fill(0);
								text("Current Card -", 200, 180);
								textSize(8);
								text(loadedCard, 193, 200);
								textSize(12);
								text("AI's Turn", 193, 225);
								manaCheck();
								manaText = "Mana = " + playMana
								text(manaText, 193, 240);
								runAI = floor(random(300, 600));
								newCard();
								turn = 2
								mana2 = loadMana
								card2 = loadCard
								textSize(8);
								text(card2, 105, 450);
								textSize(12);
							}
						}
						between(mouseX, mouseY, 200, 400, 300, 500);
						if (isTrue === "true") {
							if (playMana >= mana3) {
								playMana = playMana - mana3
								loadedCard = card3
								fill(100);
								rect(200, 400, 100, 100);
								rect(185, 150, 100, 100);
								fill(0);
								text("Current Card -", 200, 180);
								textSize(8);
								text(loadedCard, 193, 200);
								textSize(12);
								text("AI's Turn", 193, 225);
								manaCheck();
								manaText = "Mana = " + playMana
								text(manaText, 193, 240);
								runAI = floor(random(300, 600));
								newCard();
								turn = 2
								mana3 = loadMana
								card3 = loadCard
								textSize(8);
								text(card3, 205, 450);
								textSize(12);
							}
						}
						between(mouseX, mouseY, 300, 400, 400, 500);
						if (isTrue === "true") {
							if (playMana >= mana4) {
								playMana = playMana - mana4
								loadedCard = card4
								fill(100);
								rect(300, 400, 100, 100);
								rect(185, 150, 100, 100);
								fill(0);
								text("Current Card -", 200, 180);
								textSize(8);
								text(loadedCard, 193, 200);
								textSize(12);
								text("AI's Turn", 193, 225);
								manaCheck();
								manaText = "Mana = " + playMana
								text(manaText, 193, 240);
								runAI = floor(random(300, 600));
								newCard();
								turn = 2
								mana4 = loadMana
								card4 = loadCard
								textSize(8);
								text(card4, 305, 450);
								textSize(12);
							}
						}
						between(mouseX, mouseY, 400, 400, 500, 500);
						if (isTrue === "true") {
							if (playMana >= mana5) {
								playMana = playMana - mana5
								loadedCard = card5
								fill(100);
								rect(400, 400, 100, 100);
								rect(185, 150, 100, 100);
								fill(0);
								text("Current Card -", 200, 180);
								textSize(8);
								text(loadedCard, 193, 200);
								textSize(12);
								text("AI's Turn", 193, 225);
								manaCheck();
								manaText = "Mana = " + playMana
								text(manaText, 193, 240);
								runAI = floor(random(300, 600));
								newCard();
								turn = 2
								mana5 = loadMana
								card5 = loadCard
								textSize(8);
								text(card5, 405, 450);
								textSize(12);
							}
						}
					}
				} else {
					 if (menu === 4) {
						 between(mouseX, mouseY, 440, 440, 490, 490);
						 if (isTrue === "true") {
							 menu0();
							 menu = 0
						}
					}
				}
			}
		}
	}
	isTrue = "false"
}

function menu0() {
	clear();
	menu = 0
	fill(100);
	rect(0, 0, 500, 500);
	rect(10, 10, 50, 50);
	rect(10, 70, 50, 50);
	rect(10, 130, 50, 50);
	fill(0);
	text("Play", 22, 39);
	text("Cards", 20, 99);
	text("Patch", 20, 159);
}

function menu1() {
	clear();
	fill(100);
	rect(0, 0, 500, 500);
	rect(440, 440, 50, 50);
	placeVar = 10
	for (ite = 0; ite < 13; ite++) {
		rect(10, placeVar, 450, 25);
		placeVar = placeVar + 25
	}
	fill(0);
	text("Return", 447, 470);
	text("Mage - Defense - 5 Mana - Advanced", 13, 27);
	text("Knight - Defense - 4 Mana", 13, 52);
	text("Shield - Defense - 3 Mana", 13, 77);
	text("Prince - Offense - 3 Mana", 13, 102);
	text("Siege Ram - Offense - 4 Mana", 13, 127);
	text("Fireball - Offense - 2 Mana", 13, 152);
	text("Mortar - Offense - 7 Mana", 13, 177);
	text("Bomber - Defense - 5 Mana", 13, 202);
	text("Firestorm - Offense - 3 Mana", 13, 227);
	text("Titan - Offense - 12 Mana", 13, 252);
	text("Wall - Defense - 6 Mana", 13, 277);
	text("Mirror Wall - Defense - 2 Mana", 13, 302);
	text("Balloon - Offense - 1 Mana", 13, 327);
}

function menu2() {
	clear();
	rectMode(CORNER);
	fill(100);
	rect(0, 0, 500, 500);
	rectMode(CENTER);
	rect(250, 250, 100, 100);
	rect(250, 350, 100, 50);
	rectMode(CORNER);
	fill(0);
	text("Confirm", 230, 255);
	text("Cancel", 230, 355);
}

function menu3() {
	clear();
	fill(100);
	rect(0, 0, 500, 500);
	rect(185, 150, 100, 100);
	placeVar = 0
	for (ite = 0; ite < 5; ite++) {
		rect(placeVar, 400, 100, 100);
		placeVar = placeVar + 100
	}
	rect(440, 10, 50, 50);
	fill(0);
	text("Quit", 455, 40);
	loadedCard = "None"
	text("Current Card -", 200, 180);
	textSize(8);
	text(loadedCard, 193, 200);
	textSize(12);
	text("Player's Turn", 193, 225);
	playMana = 7
	manaText = "Mana = " + playMana
	text(manaText, 193, 240);
	loadCards();
}

function menu4() {
	clear();
	fill(100);
	rect(0, 0, 500, 500);
	rect(440, 440, 50, 50);
	fill(0);
	text("Return", 447, 470);
}

function newCard() {
	randCard = floor(random(1, 14));
	if (randCard === 1) {
		loadCard = "Mage(5)"
		loadMana = 5
	} else if (randCard === 2) {
		loadCard = "Knight(4)"
		loadMana = 4
	} else if (randCard === 3) {
		loadCard = "Shield(3)"
		loadMana = 3
	} else if (randCard === 4) {
		loadCard = "Prince(3)"
		loadMana = 3
	} else if (randCard === 5) {
		loadCard = "Siege Ram(4)"
		loadMana = 4
	} else if (randCard === 6) {
		loadCard = "Fireball(2)"
		loadMana = 2
	} else if (randCard === 7) {
		loadCard = "Mortar(7)"
		loadMana = 7
  } else if (randCard === 8) {
		loadCard = "Bomber(5)"
		loadMana = 5
	} else if (randCard === 9) {
	  loadCard = "Firestorm(3)"
	  loadMana = 3
  } else if (randCard === 10) {
		loadCard = "Titan(12)"
	  loadMana = 12
	} else if (randCard === 11) {
		loadCard = "Wall(6)"
		loadMana = 6
	} else if (randCard === 12) {
		loadCard = "Mirrow Wall(2)"
		loadMana = 2
	} else if (randCard === 13) {
		loadCard = "Balloon(1)"
		loadMana = 1
	}
}

function loadCards() {
	placeVar = 5
	currCard = 1
	for (ite = 0; ite < 6; ite++) {
		newCard();
		textSize(8);
		text(loadCard, placeVar, 450);
		textSize(12);
		if (currCard === 1) {
			card1 = loadCard
			mana1 = loadMana
		} else if (currCard === 2) {
			card2 = loadCard
			mana2 = loadMana
		} else if (currCard === 3) {
			card3 = loadCard
			mana3 = loadMana
		} else if (currCard === 4) {
			card4 = loadCard
			mana4 = loadMana
		} else if (currCard === 5) {
			card5 = loadCard
			mana5 = loadMana
		}
		placeVar = placeVar + 100
		currCard++
	}
	print(card1);
	print(card2);
	print(card3);
	print(card4);
	print(card5);
}

/*
function playGUI() {
	rect(185, 150, 100, 100);
	fill(0);
	text("Current Card -", 200, 180);
	textSize(8);
	text(loadedCard, 193, 200);
	textSize(12);
	text("AI's Turn", 193, 225);
	manaCheck();
	manaText = "Mana = " + playMana
	text(manaText, 193, 240);
	runAI = floor(random(300, 600));
	newCard();
	turn = 2
}
*/

function playAI() {
	newCard();
	fill(100);
	rect(185, 150, 100, 100);
	fill(0);
	text("Current Card -", 200, 180);
	textSize(8);
	text(loadCard, 193, 200);
	textSize(12);
	text("Player's Turn", 193, 225);
	playMana = playMana + 4
	manaCheck();
	manaText = "Mana = " + playMana
	text(manaText, 193, 240);
	turn = 1
}

function manaCheck() {
	if (playMana <= 0) {
		playMana = 1
	}
	if (playMana > 15) {
		playMana = 15
	}
}

function between(varX1, varY1, varX2, varY2, varX3, varY3) {
	if (varX1 > varX2 && varX1 < varX3) {
		if (varY1 > varY2 && varY1 < varY3) {
			isTrue = "true"
		} else {
			isTrue = "false"
		}
	}
}
