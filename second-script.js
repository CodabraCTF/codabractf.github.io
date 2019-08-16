var rand_question = getRandomInt(0,1);

arr_questions = [
    'Музыка жизни = ?',
    'Любимый певец?',
    '4 желтых товарища в зеленых мундирах?',
    'Белое облако на листке?'
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
		window.open('offer.html');
	} 
	else if (user_answer == null) {
		alert( 'Вы не ввели ответ на вопрос' );
	} 
	else {
		alert( 'Неправильный ответ' );
	}
}
