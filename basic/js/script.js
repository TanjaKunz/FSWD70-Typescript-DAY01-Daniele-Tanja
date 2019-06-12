// let list: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < 11; i++) {
// 	var result: number = i;
// 	var loc = document.createElement("p");
// var foo = [];
// for (var i = 1; i <= N; i++) {
//    foo.push(i);
// }
// 	document.write(loc);
// };
// ==================================================================
var moltiply = document.getElementById('math_x');
// for (let i =1; i <= 10; ++i) {
// 	var result: any = i * 1;
// 	var loc = document.createElement('p');
// 	var show: string = (result + 'x 1');
// 	var tNode = document.createTextNode(show);
// 	loc.appendChild(tNode);
// 	moltiply.appendChild(loc);
// }
for (var i = 1; i <= 10; ++i) {
    var result = i * 1;
    var loc = document.createElement('p');
    var show = result + " x 1 = " + result;
    moltiply.appendChild(loc);
    loc.innerHTML += show;
}
for (var i = 1; i <= 10; ++i) {
    var result = i * 1;
    var divBoot = document.createElement('div');
    var att = document.createAttribute('class');
    att.value = "col-2";
    divBoot.setAttributeNode(att);
    var loc = document.createElement('p');
    var show = result + " x 1 = " + result;
    moltiply.appendChild(divBoot);
    loc.innerHTML += show;
}
