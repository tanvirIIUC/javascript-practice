document.getElementById('submit').addEventListener('click',function()
{
    const userEmail=document.getElementById('user-email');
    const email=userEmail.value;
    // console.log(email);
    const passWord=document.getElementById('password');
    const pass =passWord.value;
    if(email==='sohan' && pass==='12345')
    {
        window.location.href='main.html';
    }
    else {
        alert("Wrong!!!!");
    }
})