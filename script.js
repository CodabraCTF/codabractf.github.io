var key = getRandomInt(1000,100000);
var rand_question = getRandomInt(0,4);
startdate = new Date();
clockStart = startdate.getTime();
seconds = 0;
minutes = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function signin(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

	if (login == 'admin' && password == key){
        localStorage.setItem("secs", seconds);
        localStorage.setItem("mins", minutes);
        var frame = window.open('second.html');
	} 
	else if (login == '' || password == '') {
		alert( 'Вы что-то забыли ввести' );
	} 
	else {
		alert( 'Неверный логин или пароль' );
	}
}

var input_login = document.querySelector("#login");
input_login.addEventListener("keyup", handler);
function handler() {
  if(event.code == "Enter"){
    signin();
  };
}

var input_password = document.querySelector("#password");
input_password.addEventListener("keyup", handler);
function handler() {
  if(event.code == "Enter"){
    signin();
  };
}

function forgot(){
    question = ['Любимый цвет?','Любимая машина?','Любимое место отдыха?','На какой улице живете?','В каком городе была ваша первая работа?'];
    answer = ['голубой','лимузин','бали','аптекарский переулок','новосибирск'];
    var rand = rand_question;
    var user_answer = prompt(question[rand], '');
    user_answer = user_answer.toLowerCase();
	if (user_answer == answer[rand]){
		alert('Пароль от администратора: ' + key);
	} 
	else if (user_answer == null) {
		alert( 'Вы не ввели ответ на вопрос' );
	} 
	else {
		alert( 'Неправильный ответ' );
	}
}

function initStopwatch() {
  var thisTime = new Date(); 
  return (thisTime.getTime() - clockStart)/1000; 
}

function getSecs() {
  var tSecs = Math.round(initStopwatch());
  var iSecs = tSecs % 60;
  var iMins = Math.round((tSecs-30)/60);
  var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
  var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
  seconds = sSecs;
  minutes = sMins;
  setTimeout('getSecs()', 1000); 
}