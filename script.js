var key = getRandomInt(1000,100000);
var rand_question = getRandomInt(0,4);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function signin(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    
	if (login == 'admin' && password == key){
		window.open('second.html');
	} 
	else if (login == '' || password == '') {
		alert( 'Вы что-то забыли ввести' );
	} 
	else {
		alert( 'Неверный логин или пароль' );
	}
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