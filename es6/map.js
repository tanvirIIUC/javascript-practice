const array1 = [1,2,3,4,5,6,7,8,9];


const array2 = array1.map(x=>x*5);
console.log(array2);

const even = array1.filter(x=>x%2==0);

console.log(even);


const obj = [
         {
            name : 'sohan',
            age : 21,
            salary : 9000
         },
         {
            name : 'akib',
            age : 21,
            salary : 5000
         },
        {
            name : 'rakib',
            age : 21,
            salary : 6000
         },
         {
            name : 'arman',
            age : 21,
            salary : 6000
         },
         
]
const find = obj.find(x=>x.salary==5000)
console.log(find);