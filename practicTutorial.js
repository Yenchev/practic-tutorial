'use srtict';

const questionNumberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const numberOfFilms = questionNumberOfFilms;

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const oneOfLastFilms = prompt('Один из последних просмотренных фильмов?', '');
const rateOfFilms = prompt('На сколько оцените его?', '');
const oneOfLastFilms2 = prompt('Один из последних просмотренных фильмов?', '');
const rateOfFilms2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[oneOfLastFilms] = rateOfFilms;
personalMovieDB.movies[oneOfLastFilms2] = rateOfFilms2;


console.log(personalMovieDB);
