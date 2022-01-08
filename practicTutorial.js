'use srtict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let a;
let b;

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		a = prompt('Один из последних просмотренных фильмов?', '');
		b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('Done');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (10 <= personalMovieDB.count <= 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonalLevel();

console.log(personalMovieDB);

function shovMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}
shovMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(
			`Ваш любимый жанр под номером ${i} ?`
		);
	}
}
writeYourGenres();
