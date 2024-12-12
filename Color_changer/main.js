const btn = document.getElementById("button");

const rainbow = ['red','yellow','green','blue','rebeccapurplu','violet'];


function change() 
{

document.body.style.background = rainbow[Math.floor(7*Math.random())];


}

btn.addEventListener('click',change);
