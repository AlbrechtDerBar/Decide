// All Functions---------------------------------------------------------------------------
function dropDown(button) {
  var pages = document.getElementById("pages");

  if(pages.style.display == "block") {
    pages.style.display = "none";
    button.innerHTML = "▽";
  }
  else {
    pages.style.display = "block";
    button.innerHTML = "△";
  }
}

function getRand(max) {
  return Math.floor(Math.random() * max);
}
//-----------------------------------------------------------------------------------------

// Flip Functions--------------------------------------------------------------------------
function flip() {
  var flip = getRand(2);
  var result = document.getElementById("flipResult");
  if(flip == 0) {
    result.innerHTML = "You Got Heads";
  }
  else {
    result.innerHTML = "You Got Tails";
  }
}

function dontFlip() {
  document.getElementById("div0").style.display = "none";
  document.getElementById("div1").style.display = "block";
  document.getElementById("flipResult").innerHTML = "";
}

function op0() {
  document.getElementById("div0").style.display = "block";
  document.getElementById("div1").style.display = "none";
}

function op1() {
  window.alert("Bruh");
  window.close();
}
//-----------------------------------------------------------------------------------------

//Dice Functions---------------------------------------------------------------------------
function addDie() {
  var add = document.getElementById("add");
  var roll = document.getElementById("roll");
  var remove = document.getElementById("remove");
  var result = document.getElementById("dieResult");
  var rClone = result.cloneNode(true);

  var div = document.createElement("div");
  var dieNum = document.createElement("input");
  var dieType = document.createElement("select");
  var d4 = document.createElement("option");
  var d6 = document.createElement("option");
  var d8 = document.createElement("option");
  var d10 = document.createElement("option");
  var d20 = document.createElement("option");
  var d100 = document.createElement("option");
  var add2 = document.createElement("button");
  var roll2 = document.createElement("button");
  var remove2 = document.createElement("button");

  div.classList.add("die");

  dieNum.type = "number";
  dieNum.name = "numberOfDie";
  dieNum.classList.add("dieNum");

  dieType.name = "dieType";
  dieType.classList.add("dieType");

  d4.innerHTML = "d4";
  d6.innerHTML = "d6";
  d8.innerHTML = "d8";
  d10.innerHTML = "d10";
  d20.innerHTML = "d20";
  d100.innerHTML = "d100";

  add2.setAttribute("onclick", "addDie()");
  add2.id = "add";
  add2.innerHTML = "+";

  roll2.setAttribute("onclick", "roll()");
  roll2.id = "roll";
  roll2.innerHTML = "Roll";

  remove2.setAttribute("onclick", "removeDie(this)");
  remove2.id = "remove";
  remove2.innerHTML = "-";

  div.appendChild(dieNum);
  div.appendChild(dieType);
  dieType.appendChild(d4);
  dieType.appendChild(d6);
  dieType.appendChild(d8);
  dieType.appendChild(d10);
  dieType.appendChild(d20);
  dieType.appendChild(d100);
  div.appendChild(add2);
  div.appendChild(roll2);
  div.appendChild(remove2);

  add.remove();
  roll.remove();
  result.remove();
  remove.remove();

  document.body.appendChild(div);
  document.body.appendChild(rClone);
}

function roll() {
  var value = 0;
  var unfilled = false;
  var dieNumArray = [];
  var dieTypeArray = [];
  var dieNum = document.querySelectorAll(".dieNum").forEach(e => {
    dieNumArray.push(e.value);
  });
  var dieType = document.querySelectorAll(".dieType").forEach(e => {
    dieTypeArray.push(e.value);
  });

  for(i = 0; i < dieNumArray.length; i++) {
    if(dieNumArray[i] == '') {
      unfilled = true;
    }
  }

  if(unfilled == false) {
    for(i = 0; i < dieNumArray.length; i++) {
      for(j=0; j < dieNumArray[i]; j++) {
        value += getRand(getDieType(dieTypeArray[i])) + 1;
      }
    }
    document.getElementById("dieResult").innerHTML = "You rolled " + value + ".";
  }
  else {
    window.alert("one or more is not filled in");
  }
}

function getDieType(type) {
  switch(type) {
    case('d4'):
      return 4;
    break
    case('d6'):
      return 6;
    break
    case('d8'):
      return 8;
    break
    case('d10'):
      return 10;
    break
    case('d20'):
      return 20;
    break
    case('d100'):
      return 100;
    break
  }
}

function removeDie(die) {
  var dieAmount = 0;
  var parent = die.parentNode
  var dice = [];
  
  document.querySelectorAll('.die').forEach(e => {
    dieAmount += 1;
  });
  if (dieAmount == 1) {
    window.alert("you can't delete this item");
  }
  else{
    parent.remove();
  }
  
  document.querySelectorAll('.die').forEach(e => {
    dice.push(e);
  });

  var add = document.createElement("button");
  var roll = document.createElement("button");
  var remove = document.createElement("button");

  add.setAttribute("onclick", "addDie()");
  add.id = "add";
  add.innerHTML = "+";

  roll.setAttribute("onclick", "roll()");
  roll.id = "roll";
  roll.innerHTML = "Roll";

  remove.setAttribute("onclick", "removeDie(this)");
  remove.id = "remove";
  remove.innerHTML = "-";

  if (dieAmount != 1) {
    dice[dieAmount-2].appendChild(add);
    dice[dieAmount-2].appendChild(roll);
    dice[dieAmount-2].appendChild(remove);
  }
}
//-----------------------------------------------------------------------------------------

//List Functions---------------------------------------------------------------------------
function addItem() {
  var add = document.getElementById("add");
  var choose = document.getElementById("choose");
  var remove = document.getElementById("remove");
  var result = document.getElementById("listResult");
  var rClone = result.cloneNode(true);
  var add2 = document.createElement("button");
  var choose2 = document.createElement("button");
  var remove2 = document.createElement("button");

  var div = document.createElement("div");
  var item = document.createElement("input");

  div.classList.add("list");

  item.type = "text";
  item.name = "listItem";
  item.classList.add("listItem");

  add2.setAttribute("onclick", "addItem()");
  add2.id = "add";
  add2.innerHTML = "+";

  choose2.setAttribute("onclick", "choose()");
  choose2.id = "choose";
  choose2.innerHTML = "Choose";

  remove2.setAttribute("onclick", "removeItem(this)");
  remove2.id = "remove";
  remove2.innerHTML = "-";

  div.appendChild(item);
  div.appendChild(add2);
  div.appendChild(choose2);
  div.appendChild(remove2);

  add.remove();
  choose.remove();
  result.remove();
  remove.remove();

  document.body.appendChild(div);
  document.body.appendChild(rClone);
}

function choose() {
  var winner = "";
  var items = [];
  var unfilled = false;

  document.querySelectorAll(".listItem").forEach(e => {
    items.push(e.value);
  });

  for(i = 0; i < items.length; i++) {
    if(items[i] == '') {
      unfilled = true;
    }
  }

  if(unfilled == false) {
    console.log(items);
    var num = getRand(items.length);
    console.log(num);

    winner = items[num];

    document.getElementById("listResult").innerHTML = "the winner (or loser) is " + winner + "! (:( )"
  }
  else {
    window.alert("one or more is not filled in");
  }

}

function removeItem(item) {
  var itemAmount = 0;
  var parent = item.parentNode
  var items = [];
  
  document.querySelectorAll('.list').forEach(e => {
    itemAmount += 1;
  });
  if (itemAmount == 1) {
    window.alert("you can't delete this item");
  }
  else{
    parent.remove();
  }
  
  document.querySelectorAll('.list').forEach(e => {
    items.push(e);
  });

  var add = document.createElement("button");
  var choose = document.createElement("button");
  var remove = document.createElement("button");

  add.setAttribute("onclick", "addItem()");
  add.id = "add";
  add.innerHTML = "+";

  choose.setAttribute("onclick", "choose()");
  choose.id = "choose";
  choose.innerHTML = "Choose";

  remove.setAttribute("onclick", "removeItem(this)");
  remove.id = "remove";
  remove.innerHTML = "-";

  console.log("itemAmount: " + itemAmount);
  console.log("items: " + items);

  if (itemAmount != 1) {
    items[itemAmount-2].appendChild(add);
    items[itemAmount-2].appendChild(choose);
    items[itemAmount-2].appendChild(remove);
  }
}
//-----------------------------------------------------------------------------------------

// 8-ball----------------------------------------------------------------------------------
  function shake() {
    var question = document.getElementById("question");
    var answers = ["Ask again later", "Signs point to yes", "Signs point to no", "An emphatic yes", "Absolutely not"];
    if(question.value == "") {
      window.alert("An answer cannot be recieved without a question to answer.")
    }
    else {
      var answer = getRand(answers.length);

      window.alert("The ball reads: \"" + answers[answer] + "\"");
    }
  }
// ----------------------------------------------------------------------------------------

// Stick Game------------------------------------------------------------------------------
function getSticks() {
  var container = document.getElementById("sticks");
  var stick = document.createElement("input");
  container.appendChild(stick);
  stick.setAttribute("type", "text");
  stick.setAttribute("maxlength", "3");
  stick.setAttribute("pattern", "[a-zA-Z]*");
  stick.setAttribute("class", "stick");
}

function getOrder() {
  var num = 0;
  var filled = true;
  var stickName = [];
  var order = [];
  var final = ""
  document.querySelectorAll('.stick').forEach(e => {
    num += 1;
    if(e.value == "") {
      filled = false;
    }
    else {
      stickName.push(e.value);
    }
  });

  if (filled == true) {
    for(i = 0; i < num; i++) {
        var rnd = getRand(stickName.length);
        order.push(stickName[rnd]);
        stickName.splice(rnd, 1);
    }
    for(i = 0; i < order.length; i++) {
      final += (i+1) + ": " + order[i];
      final += "\n";
    }
    window.alert(final);
  }
  else {
    window.alert("Please fill in all the sticks, or reload the page because I'm too lazy to add the ability to remove sticks");
  }
  
}
// ----------------------------------------------------------------------------------------

// Russian Roulette -----------------------------------------------------------------------
var bullet = 0;
var current = 0;

function loadGun() {
  bullet = getRand(6);
}

function spinChamber() {
  current = getRand(6);
}

function fire() {
  if(current > 5) {
    current = 0;
  }

  if(bullet == current) {
    dead();
  }
  else {
    alive();
  }
}

function dead() {
  window.alert("you died, the gun has been reset");
  loadGun();
  current = 0;
}

function alive() {
  window.alert("You survived, for now");
  current += 1;
}
// ----------------------------------------------------------------------------------------

// Card Functions -------------------------------------------------------------------------
var deck = [];
var shuffledDeck = [];
var cardNums = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

function cardGen() {
  for(i = 0; i < 13; i++) {
    var cardS = cardNums[i] + "♠";
    var cardH = cardNums[i] + "♡";
    var cardD = cardNums[i] + "♢";
    var cardC = cardNums[i] + "♣";

    deck.push(cardS);
    deck.push(cardH);
    deck.push(cardD);
    deck.push(cardC);
  }
}

function shuffle() {
  cardGen();
  while(deck.length != 0) {
    var i = getRand(deck.length);
    shuffledDeck.push(deck[i]);
    deck.splice(i, 1);
  }
}

function draw() {
  if(shuffledDeck == 0) {
    window.alert("There isnt a deck to draw from")
  }
  else {
    var card = shuffledDeck.pop()
    window.alert(card);
  }
}
// ----------------------------------------------------------------------------------------