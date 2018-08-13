/*"use strict";*/
// старая реализация дз


/*function ShowSimpleNumber(){
do
{
	for(i=2;i<=start;i++)
		{
			if(start%i==0)
			k++;
		}
	if(k==2)
		alert(start);
	start++;
	k=1;
}while(start<=end);


}
alert("Задание на выведение простых чисел на экран в заданном интервале");
var start,end;
	do
	{
		start=prompt("Введите целое число не меньше единицы - начало интервала");
	} while (start<1 || (start-Math.trunc(start))>0);

	do
	{
		end=prompt("Введите целое число - конец интервала");
	} while (end<start || (end-Math.trunc(end))>0);

var i;
var k=1;
var numbers;
ShowSimpleNumber();*/

var Time =new Date();
StartTime=Time.getTime();

var minNum=2, maxNum=10000;
    
//функция для проверки является ли число простым. решение Наташи Ипатовой
function isPrime(n){
   if (n == 1){
       return false;
   }
   for (var d = 2; d*d <= n; d++){
       if (n%d == 0)
           return false;
   }
   return true;
   }

function getPrimes(min, max){
   var arr = [];
   var j = 0;
   for (var i = min; i < max; i++) {
       if ( isPrime(i) ){
           arr[j] = i;
           j++;
           }
       }
       return arr;
   }

getPrimes(minNum, maxNum);

var Time1 =new Date();
EndTime = Time1.getTime();
var result1 = EndTime-StartTime;



// программа вторым способом -моим
var Time2 = new Date();
StartTime2 = Time2.getTime();

function ShowSimpleNumber(){
   do
   {
       for(i = 2; i <= start; i++){
               if(start%i == 0)
                   k++;
               if(k == 3)
                   break;
              }
               /*if(k == 2)
                   alert(start); */
       start++;
       k = 1;
   }while(start <= end);
}

var start = 2 ,end = 10000;

var i;
var k = 1;
var numbers;
ShowSimpleNumber();

var Time3 = new Date();
EndTime2 = Time3.getTime();
var result2 = EndTime2-StartTime2;
alert('Время работы первой программы ' + result1+' мс   ' + 'второй программы'+result2+' мс   ');
