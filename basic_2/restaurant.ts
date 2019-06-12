

var moltiply = document.getElementById('math_x');



let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (var y = 0; y < arr.length; ++y) {

	var divBoot = document.createElement("div");

	divBoot.classList.add("col-12");

	moltiply.appendChild(divBoot);

	var arrNow = arr[y];
	

		for (let i = 1; i <= arr.length; ++i) {



			var result: any = i * arrNow;

			var loc = document.createElement("p");

			let show = `${[i]} X ${arrNow} =  ${result}`;

			divBoot.appendChild(loc);

		    loc.innerHTML += show;

			
			}


	
}