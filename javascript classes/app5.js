// // DOM Manupulation
// By id 
// document.getElementById("btn").style.border ="2px solid red";
// document.getElementById("hdg").style.background="orange";
// let elem = document.getElementById("btn");
// console.log(elem);

// By class

// let a = document.getElementsByClassName("container")
// console.log(a);
// a[0].style.background ="red";
// a[1].classList.add("bg_primary");
// // a[1].classList.add("success");
// a[1].classList.remove("success");
// console.log(a[0].innerHTML);
// console.log(a[1].innerHTML);

//By tagname

// let tn = document.getElementsByTagName('div')
// console.log(tn);

// createpara=document.createElement('p');
// createpara.innerText ="this is created paragraph";
// tn[0].appendChild(createpara);
// createbold=document.createElement('b');
// createbold.innerText="this is replaced text in bold";
// tn[0].replaceChild(createbold,createpara);
// ///removeChild(Element); ---> to remove an element

// By queryselector
// let q = document.querySelector('.container');
// console.log(q);

let q = document.querySelectorAll('.container');
console.log(q);