/* 1) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output. */
/*  ans 1 */
function foo()
{
    console.log('foo');
}
function bar()
{
    console.log('bar');
}

bar();
foo();
 
/* 2) Write a function called make_avg() which will take an three integers and return the
average of those values. */
/* ans 2 */

function avrs(a,b,c){
    let sum=a+b+c;
    averase = sum/3;
    return averase;

}
let avr= avrs(3,5,10);
console.log(avr);

/* 3) Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */
/* ans 3 */
function make_avg(a)
{
    let sum=0;
    let avrs;
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
   return avrs = sum/a.length;

}

let a = [3,5,6,7];
console.log(make_avg(a));

/* 4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. */

/* ans 4 */

function odd_even(a)
{
     if(a%2==0)
     {
        console.log('Even');
     }
     else  console.log('Odd');
}

odd_even(5);
