/*//first task
alert('ЗАДАЧА НА ФУНКЦИЮ  filter');

function isEven(x) {
   if (x%2 === 0) {
       return true;
   }
   return false;
}

function filter(isEven,arr){
   var arr1 = [];
   for (var i = 0; i < arr.length; i++ ){
      if (isEven(arr[i]))
           arr1.push(arr[i]);
   }
   return arr1;
}

var array=[4,7,8,12,4,2,56,7,8];
alert('Отфильтрованный массив четных чисел '+filter(isEven,array)+ '\n исходный массив  '+array);*/

//second task

alert('ЗАДАЧА НА НАХОЖДЕНИЕ КОЛИЧЕСТВ СЛОВ В ТЕКСТЕ');

/*var str='Lorem ipsum dolor sit amet, consectetur adipiscing elit'+
       'sed do eiusmod tempor incididunt ut labore et dolore magna'+
       'aliqua. Ut enim ad minim veniam, quis nostrud exercitation'+
       'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'+
       'aute irure dolor in reprehenderit in voluptate velit esse cillum'+
       'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'+
       'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var arr = [];
arr = str.split(' ');
alert('Число слов в тексте '+ arr.length);*/


var str = 'Lorem Lorem Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit'+
       ' sed do eiusmod tempor incididunt ut labore et dolore magna'+
       ' aliqua. Ut enim ad minim veniam, quis nostrud exercitation'+
       ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'+
       ' aute irure dolor in reprehenderit in voluptate velit esse cillum'+
       ' dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'+
       'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
str=str.toLowerCase();


// убираю точки
var i=-2;
do{

   i = str.search(/[.]/);
   if (i != -1)
       str = str.slice(0,i)+str.slice(i+1, 1+str.length);

} while(i != -1);

i = -2;


// убираю запятые
do{

   i = str.search(',');
   if (i !=- 1)
       str=str.slice(0,i)+str.slice(i+1, 1+str.length);

} while(i != -1);
/*alert (str); */

var arr = [];
var arr1 = [];
arr = str.split(' ');
/*alert('Число слов в тексте '+ arr.length);*/
var j ;


//массив неповторных слов
for (   j = 0; j < arr.length; j++ ){

   if ((arr1.indexOf(arr[j])) == -1)
       arr1.push(arr[j]);     

}

/*alert (arr1);*/

var count = 0;


//поиск на вхожение слова
str ='';
for (   j = 0; j < arr1.length; j++ ){

  for (var k = 0 ; k < arr.length; k++  ){

      if (arr[k] == arr1[j])
       count++;   

  }
  str += arr1[j] +"  "+ count +'шт'+'\n';
 /*  alert(arr1[j]+ "   "+count);*/
  count = 0;
}

alert (str);


//third task
/*alert('ЗАДАЧА НА ВЫСОКОСНЫЙ ГОД');
var year = prompt('Введите год');

if ((year % 4) ==0){
   if ( (year % 400) ==0)
       alert('высокосный год');
   else
       if( (year % 100) ==0 )
           alert('невысокосный год');
       else
           alert('высокосный год');
}
else
  alert('невысокосный год');


//forth task
alert("ЗАДАЧА НА РАЗЛОЖЕНИЕ ЧИСЛА НА РАЗРЯДЫ");
var number = prompt('введите число');
var arr = [];
arr = number.split('').reverse();
switch (arr.length){
  case 1:
   alert('единиц '+ namber);
  break;

  case 2:
   alert('десятков ' +arr[1]+'\nединиц '+ arr[0]);
  break;

  case 3:
   alert('сотен'+arr[2]+'\nдeсятков ' +arr[1]+'\nединиц '+ arr[0]);
  break;

  case 4:
   alert('единиц тысяч '+ arr[3]+'\nсотен'+arr[2]+'\nдeсятков ' +arr[1]+'\nединиц '+ arr[0]);
  break;

  case 5:
   alert('десятков тысяч '+ arr[4]+'\nединиц тысяч '+ arr[3]+'\nсотен'+arr[2]+'\nдeсятков ' +arr[1]+'\nединиц '+ arr[0]);
  break;

  case 6:
   alert('сотен тысяч '+ arr[5]+'\nдесятков тысяч '+ arr[4]+'\nединиц тысяч '+ arr[3]+'\nсотен'+arr[2]+'\nдeсятков ' +arr[1]+'\nединиц '+ arr[0]);
  break;

   case 7:
   alert('единиц миллионов '+ arr[6]+'\nсотен тысяч '+ arr[5]+'\nдесятков тысяч '+ arr[4]+'\nединиц тысяч '+ arr[3]+'\nсотен'+arr[2]+'\nдeсятков '+
         arr[1]+'\nединиц '+ arr[0]);
  break;

  case 8:
   alert('десятков миллионов '+ arr[7]+'\nединиц миллионов '+ arr[6]+'\nсотен тысяч '+ arr[5]+'\nдесятков тысяч '+ arr[4]+'\nединиц тысяч '+ 
        arr[3]+'\nсотен'+arr[2]+'\nдeсятков '+arr[1]+'\nединиц '+ arr[0]);
  break;

  case 9:
   alert('сотен миллионов '+ arr[8]+'\nдесятков миллионов '+ arr[7]+'\nединиц миллионов '+ arr[6]+'\nсотен тысяч '+ arr[5]+'\nдесятков тысяч '+ 
        arr[4]+'\nединиц тысяч '+ arr[3]+'\nсотен'+arr[2]+'\nдeсятков '+arr[1]+'\nединиц '+ arr[0]);
  break;


}*/