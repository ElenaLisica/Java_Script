"use strict";
var login=prompt("Введите Ваш логин");
	if (login=="Логин")
		{
			var password=prompt("Введите Ваш пароль");
				if (password=="Черный Властелин")
					alert("Добро пожаловать!");
				else
					(password==null)?alert("Вход отменен"):alert("Пароль неверен");
			}
	else
		(login==null)?alert("Вход отменен"):alert("Я Вас не знаю");
		