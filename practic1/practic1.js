//   ans----2
/* var a = 75.25;
var b = 65;
var c = 80;
var d = 35.45;
var e = 99.50;
  console.log(a+b+c+d+e);
  var aver=(a+b+c+d+e)/5; 
  console.log(aver.toFixed(2));
 */

// ****** ans -3 *********

// var a='I am going to be';
// var b='an awesome web developer';
// console.log(a+' '+b);

// ********ans-4 ******

// var a=119;
// console.log(a%5);

let book = [100,201,300,401,500];

for(let i=0;i<book.length;i++)
{
  if(book[i]%2==0){
    continue;
  }
  console.log(book[i]);
}