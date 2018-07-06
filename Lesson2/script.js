
alert("Задание на выведение простых чисел на экран в заданном интервале");
var start,end;
	do
	{
		start=prompt("Введите целое число не меньше единицы - начало интервала");
	} while (start<1 || (start-Math.trunc(start))>0);

	do
	{
		end=prompt("Введите целое число - конец интервала");
	} while (end<1 || (end-Math.trunc(end)>0) || start>=end);

var i;
var k=1;
var numbers;
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
