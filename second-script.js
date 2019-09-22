var rand_question = getRandomInt(0,3);
startdate = new Date();
clockStart = startdate.getTime();
seconds = 0;
minutes = 0;

arr_questions = [
    'Музыка жизни = ?',
    'Любимый певец?',
    'Мушкетёры в зеленых мундирах?',
    'Белое облако на зелёном?'
];

arr_answers = [
    'черное и белое',
    'рик эстли',
    'кукуруза',
    'камелия'
];

document.getElementById('question').innerHTML = arr_questions[rand_question];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function signin(){
    user_answer = document.getElementById('answer').value;
    user_answer = user_answer.toLowerCase();
	if (user_answer == arr_answers[rand_question]){
        temp_seconds = parseInt(seconds) + parseInt(localStorage.getItem("secs"));
        temp_minutes = parseInt(minutes) + parseInt(localStorage.getItem("mins"));
        
        if(temp_seconds >= 60){
            temp_seconds = temp_seconds % 60;
            temp_minutes += 1;
        }
        
        localStorage.setItem("secs", temp_seconds);
        localStorage.setItem("mins", temp_minutes);
        window.open('offer.html');
	} 
	else if (user_answer == null) {
		alert( 'Вы не ввели ответ на вопрос' );
	} 
	else {
		alert( 'Неправильный ответ' );
	}
}

var input_answer = document.querySelector("#answer");
input_answer.addEventListener("keyup", handler);
function handler() {
  if(event.code == "Enter"){
    signin();
  };
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
