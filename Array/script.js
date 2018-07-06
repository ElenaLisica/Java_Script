"use strict";
var NumTask;
do{
do{

NumTask=prompt('Задания: \n'+'1.Работа на уроке.Тест \n'+'2.Задания для студентов.Работа с объектами\n'+'3.Домашнее задание\n'
	+'4.Выход\n'+'Введите номер задания');
} while (NumTask!=1 && NumTask!=2 && NumTask!=3 && NumTask!=4);

switch(NumTask){
	case '1':
		var answer,i,count=0;
		var QuestionAnswer=[
		['Слово дуб это существительное? ','да'],
		['Я-местоимение? ','да'],
		['Глагол отвечает на вопрос что? ','нет'],
		]

		for (i=0;i<3;i++)
		{
		answer=prompt(QuestionAnswer[i][0]);
		if (answer.toLowerCase()==QuestionAnswer[i][1])
			count++;
		}
		alert('Из трех вопросов количество правильных ваших ответов:'+count);
	break;

	case '2':
		var salaries={
		"Вася":100,
		"Петя":300,
		"Даша":250
		};
		var k=0;

		for(var key in salaries){
			k+=(key,':',salaries[key])
			alert( key + ": " + salaries[key]  ); 
		}
		alert('Общая сумма зарплат='+k);


		var name, max=0;

		for(var key in salaries){
			if (max<salaries[key]){
				max=salaries[key];
				name=key;
			}
		}
		alert('Наибольшая зарплата '+max+' у сотрудника '+ name);
	break;

	case '3':
		var arr = [1, 2, 3, 4];
		var arrLength = arr.map(function(item) {
		  return item*item;
		});

		alert( 'Исходный массив:  '+arr+'\nНовый массив:' + arrLength);
	 break;

	 default:
	 break;
}

}while(NumTask!=4);
