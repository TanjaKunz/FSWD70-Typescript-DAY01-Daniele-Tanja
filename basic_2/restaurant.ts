/*
var moltiply = document.getElementById('math_x');



for (let i = 1; i <= 10; ++i) {

	var result: any = i * 1;
	var loc = document.createElement("p");
	var show:string =(result+" X 1 = "+ result);

	var tNode = document.createTextNode(show);
	loc.appendChild(tNode);
	moltiply.appendChild(loc);
	}
*/

var moltiply = document.getElementById('math_x');




	var divBoot = document.createElement("div");

	divBoot.classList.add("col-12");

	moltiply.appendChild(divBoot);

/*	var newDiv = document.getElementById('newDiv');*/


for (let i = 1; i <= 10; ++i) {

	var result: any = i * 1;

	var loc = document.createElement("p");

	let show = `${result} X 1 =  ${result}`;

	divBoot.appendChild(loc);

    loc.innerHTML += show;

	
	}