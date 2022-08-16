

function bestFriend(friends)
{
    let max=0;
    let index=0;
    for(var i=0;i<friends.length;i++)
    {
        if(friends[i].length>max)
        {
            max=friends[i].length;
            index=i;
        }
        // console.log(friends[i],friends[i].length);
    }

     return friends[index];
}

let friends=['akib','rakib','emon','shihab','misshon','tanvir'];
let bestfriend= bestFriend(friends);
console.log(bestfriend);