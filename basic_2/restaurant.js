var moltiply = document.getElementById('math_x');
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var y = 0; y < arr.length; ++y) {
    var divBoot = document.createElement("div");
    divBoot.classList.add("col-12");
    moltiply.appendChild(divBoot);
    var arrNow = arr[y];
    for (var i = 1; i <= arr.length; ++i) {
        var result = i * arrNow;
        var loc = document.createElement("p");
        var show = [i] + " X " + arrNow + " =  " + result;
        divBoot.appendChild(loc);
        loc.innerHTML += show;
    }
}
