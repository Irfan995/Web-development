var fn = prompt("Enter Your First Name: ")
var ln = prompt("Enter Your Last Name: ")
var age = prompt("Enter your Age: ")
var height = prompt("Enter your height: ")
var pn = prompt("Enter Your Pet name: ")
alert("thanks for the information")
if (fn[0]===ln[0] && age>=20 && age<=30 && height>=170 && pn[pn.length-1]==="y") {
  console.log("welcome Spy");
}else {
  console.log("nothing to see here");
}
